import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  PageWrapper,
  PageContainer,
  Snackbar,
  AppBarSearch
} from '@monorepo-nx/components';
import { AccountStatementAPI } from '@monorepo-nx/services/api';

import { savePin } from '../../../../utils';
import PinForm from '../../components/PinForm';

function Pin() {
  const history = useHistory();
  const [inputValue, setValue] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    type: 'pinValidation.error'
  });
  const { t } = useTranslation();

  const TOAST_TYPE = {
    'pinValidation.error': {
      variant: 'error',
      message: t('pin.toast.invalid')
    },
    'pinRecovery.error': {
      variant: 'error',
      message: t('pin.toast.recoverProblem')
    },
    'pinRecovery.success': {
      variant: 'success'
    }
  };

  /**
   * handleSubmit(e)
   * The event object here is useful to prevent the form to follow it's
   * default behaviour. The handleSubmit is used in form's "onSubmit()"
   * method for usability purposes like keyboard navigation, for example.
   *
   * @param {object} e - the event object of an anonymous function
   */
  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true);

    try {
      await AccountStatementAPI.validatePin(inputValue);

      // saves the pin as a cookie
      savePin(inputValue);

      // stops the button loading
      setLoading(false);

      // redirects to the account statement home screen
      history.replace('/');
    } catch (error) {
      setLoading(false);

      setToast({ open: true, type: 'pinValidation.error' });
    }
  };

  /**
   * handlePinRecovery(e)
   * Prevents the default behavior for securities matters, and calls the pin recovery
   * API. The recovered pin is sent to email, not returned from this service.
   *
   * @param {object} e - the event object of an anonymous function
   */
  const handlePinRecovery = async e => {
    e.preventDefault();

    try {
      // extract the data from the response
      const { data = {} } = await AccountStatementAPI.recoverPin();
      // extract the notifiedEmails list from the response data object
      const { notifiedEmails = [] } = data;
      // clean the array with emails only
      const emailsList = notifiedEmails
        ? notifiedEmails.map(item => item.email)
        : null;
      // formats a message according to the informations above
      const returnMessage = emailsList
        ? `${t('pin.toast.recoveredPinWithEmails')} ${emailsList}`
        : t('pin.toast.recoveredPin');
      // set a toast with the notified emails list
      setToast({
        open: true,
        type: 'pinRecovery.success',
        message: returnMessage
      });
    } catch (error) {
      setToast({ open: true, type: 'pinRecovery.error' });
    }
  };

  return (
    <PageWrapper>
      <AppBarSearch hideInput backButton />
      <PageContainer>
        <PinForm
          onChangeHandler={setValue}
          onSubmitHandler={handleSubmit}
          onRecoverPin={handlePinRecovery}
          inputValue={inputValue}
          isLoading={isLoading}
        />
      </PageContainer>

      <Snackbar
        data-testid="pin-toast"
        open={toast.open}
        message={TOAST_TYPE[toast.type].message || toast.message}
        variant={TOAST_TYPE[toast.type].variant}
        onClose={() => setToast(prev => ({ ...prev, open: false }))}
      />
    </PageWrapper>
  );
}

export default Pin;
