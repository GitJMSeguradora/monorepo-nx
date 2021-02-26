/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Form } from '../../../styles/forms';
import { Forms } from '../../../styles';
import ExtractFirstStep from './ExtractFirstStep';
import {
  ExtractWrapper,
  ExtractTitle,
  ExtractSubtitle,
  TitleWrapper,
  Title,
  MarginWrapper,
  StyledRadioButton,
  ExtractSwitch
} from './ExtractForm.styles';
import ExtractSecondStep from './ExtractSecondStep';

export default function ExtractForm({
  radioValue,
  setRadioValue,
  initialDate,
  setInitialDateValue,
  finalDate,
  setFinalDate,
  handleSubmit,
  isLoading,
  disregardCanceled,
  setDisregardCanceled,
  format,
  setFormat
}) {
  const { t } = useTranslation();
  return (
    <ExtractWrapper>
      <ExtractTitle>{t('extract.pageTitle')}</ExtractTitle>
      <ExtractSubtitle>
        <p>{t('extract.pageSubtitle.firstParagraph')}</p>
      </ExtractSubtitle>
      <Form handleSubmit={handleSubmit}>
        <TitleWrapper index={1} active>
          <Title>{t('extract.steps.firstStep.title')}</Title>
        </TitleWrapper>
        <ExtractFirstStep
          radioValue={radioValue}
          setRadioValue={setRadioValue}
          setFormat={setFormat}
        />
        <TitleWrapper
          index={2}
          active={radioValue !== null && radioValue !== 'accumulation'}
        >
          <Title
            disabled={radioValue === null || radioValue === 'accumulation'}
          >
            {t('extract.steps.secondStep.title')}
          </Title>
        </TitleWrapper>
        <ExtractSecondStep
          initialDate={initialDate}
          finalDate={finalDate}
          setInitialDateValue={setInitialDateValue}
          setFinalDate={setFinalDate}
          radioValue={radioValue}
        />

        <MarginWrapper>
          <div style={{ display: 'flex' }}>
            <StyledRadioButton
              style={{ marginRight: '50px' }}
              name="pdf"
              value="pdf"
              id="radioPdf"
              onChange={() => setFormat('pdf')}
              checked={format === 'pdf'}
            >
              {t('extract.steps.secondStep.options.pdf')}
            </StyledRadioButton>
            <StyledRadioButton
              onChange={() => setFormat('txt')}
              name="txt"
              value="txt"
              id="radioTxt"
              checked={format === 'txt'}
              disabled={radioValue === 'accumulation'}
            >
              {t('extract.steps.secondStep.options.txt')}
            </StyledRadioButton>
          </div>
        </MarginWrapper>
        <MarginWrapper>
          {radioValue === 'production' && (
            <ExtractSwitch
              checked={disregardCanceled}
              onRight
              onChange={() => setDisregardCanceled(!disregardCanceled)}
              data-testid="switch-disregard-canceled"
            >
              {t('extract.steps.switchText')}
            </ExtractSwitch>
          )}
        </MarginWrapper>
        <MarginWrapper>
          <Forms.Button
            size="big"
            type="submit"
            data-testid="extract-submit-button"
            variant="primary"
            onClick={handleSubmit}
            isLoading={isLoading}
            disabled={isLoading}
          >
            {t('extract.steps.submitButton')}
          </Forms.Button>
        </MarginWrapper>
      </Form>
    </ExtractWrapper>
  );
}

ExtractForm.propTypes = {
  radioValue: PropTypes.string,
  setRadioValue: PropTypes.func.isRequired,
  initialDate: PropTypes.instanceOf(Date),
  finalDate: PropTypes.instanceOf(Date),
  setInitialDateValue: PropTypes.func.isRequired,
  setFinalDate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  disregardCanceled: PropTypes.bool,
  setDisregardCanceled: PropTypes.func,
  format: PropTypes.string,
  setFormat: PropTypes.func
};
