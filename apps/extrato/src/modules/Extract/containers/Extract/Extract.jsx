import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageWrapper, AppBarSearch, Snackbar } from '@monorepo-nx/components';
import { AccountStatementAPI } from '@monorepo-nx/services/api';
import { GTMServices } from '@monorepo-nx/services/gtm';
import { forceDownload } from '@monorepo-nx/utils';
import { getPin } from '../../../../utils';
import { ExtractPageContainer } from '../../components/ExtractForm.styles';
import ExtractForm from '../../components';

function Extract() {
  const [radioValue, setRadioValue] = useState(null);
  const [initialDate, setInitialDateValue] = useState(null);
  const [finalDate, setFinalDate] = useState(null);
  const [toast, setToast] = useState({
    open: false,
    type: 'submit.genericError',
    message: ''
  });
  const [isLoading, setLoading] = useState(false);
  const [disregardCanceled, setDisregardCanceled] = useState(false);
  const [format, setFormat] = useState('pdf');

  const { t } = useTranslation();
  const history = useHistory();

  useEffect(() => {
    const pin = getPin();
    if (!pin) {
      history.replace('/pin');
    } else {
      GTMServices.createDataLayer({ event: 'Extrato novo' });
    }
  }, [history]);

  const TOAST_TYPE = {
    'submit.requiredFields': {
      variant: 'error',
      message: t('extract.toast.requiredFields')
    },
    'initialDate.error': {
      variant: 'error',
      message: t('extract.toast.initialDateValidation')
    },
    'finalDate.error': {
      variant: 'error',
      message: t('extract.toast.finalDateValidation')
    },
    'submit.genericError': {
      variant: 'error',
      message: t('extract.toast.genericError')
    },
    'submit.success': {
      variant: 'success',
      message: t('extract.toast.success')
    }
  };

  const validate = () => {
    if (!radioValue) {
      return 'submit.requiredFields';
    }

    if (radioValue !== 'accumulation' && (!initialDate || !finalDate)) {
      return 'submit.requiredFields';
    }

    if (
      radioValue !== 'accumulation' &&
      initialDate.toString() === 'Invalid Date'
    ) {
      return 'initialDate.error';
    }

    if (
      radioValue !== 'accumulation' &&
      finalDate.toString() === 'Invalid Date'
    ) {
      return 'finalDate.error';
    }

    return null;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const error = validate();

    if (error) {
      return setToast({ open: true, type: error });
    }

    setLoading(true);

    const queryParams = {
      begin: initialDate
        ? new Date(
            Date.UTC(
              initialDate.getFullYear(),
              initialDate.getMonth(),
              initialDate.getDate(),
              0,
              0,
              0
            )
          )
        : null,
      end: finalDate
        ? new Date(
            Date.UTC(
              finalDate.getFullYear(),
              finalDate.getMonth(),
              finalDate.getDate(),
              23,
              59,
              59
            )
          )
        : null,
      withCanceled: !disregardCanceled
    };

    if (radioValue !== 'production') {
      delete queryParams.withCanceled;
    }

    try {
      const response = await AccountStatementAPI.getReport(
        radioValue,
        queryParams,
        format
      );
      setToast({ open: true, type: 'submit.success' });

      const file = new Blob([response.data], {
        type: format === 'txt' ? 'application/txt' : 'application/pdf'
      });
      const fileURL = URL.createObjectURL(file);

      forceDownload(
        fileURL,
        format === 'txt' ? `extract ${new Date()}.txt` : `extract ${new Date()}`
      );
      return setLoading(false);
    } catch (e) {
      const utf8decoder = !('TextEncoder' in window) ? null : new TextDecoder();
      const arrayBufferDecoded =
        (utf8decoder && utf8decoder.decode(e.data)) || null;
      const errorArray = JSON.parse(arrayBufferDecoded);

      if (errorArray) {
        errorArray.forEach(item => {
          setToast({
            open: true,
            variant: 'error',
            message: item.value || item.Value || ''
          });
        });
      } else {
        setToast({ open: true, type: 'submit.genericError' });
      }

      return setLoading(false);
    }
  };

  const handleRadioChange = value => {
    setRadioValue(value);
    setInitialDateValue(null);
    setFinalDate(null);
    setDisregardCanceled(false);
  };

  return (
    <PageWrapper>
      <AppBarSearch hideInput backButton />
      <ExtractPageContainer>
        <ExtractForm
          radioValue={radioValue}
          setRadioValue={handleRadioChange}
          initialDate={initialDate}
          setInitialDateValue={setInitialDateValue}
          finalDate={finalDate}
          setFinalDate={setFinalDate}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          disregardCanceled={disregardCanceled}
          setDisregardCanceled={setDisregardCanceled}
          format={format}
          setFormat={setFormat}
        />
      </ExtractPageContainer>
      <Snackbar
        open={toast.open}
        message={toast.message || TOAST_TYPE[toast.type].message}
        variant={toast.variant || TOAST_TYPE[toast.type].variant}
        onClose={() => setToast(prev => ({ ...prev, open: false }))}
        data-testid="extract-snackbar"
      />
    </PageWrapper>
  );
}

export default Extract;
