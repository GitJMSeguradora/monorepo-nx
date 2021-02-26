import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ExtractStepWrapper, StyledRadioButton } from './ExtractForm.styles';

export default function ExtractFirstStep({
  radioValue,
  setRadioValue,
  setFormat
}) {
  const { t } = useTranslation();

  return (
    <ExtractStepWrapper>
      <StyledRadioButton
        name="payment"
        value="payment"
        id="radioPayment"
        data-testid="payment-radio"
        onChange={() => setRadioValue('payment')}
        checked={radioValue === 'payment'}
      >
        {t('extract.steps.firstStep.options.payments')}
      </StyledRadioButton>
      <StyledRadioButton
        name="production"
        value="production"
        id="radioproduction"
        data-testid="production-radio"
        onChange={() => setRadioValue('production')}
        checked={radioValue === 'production'}
      >
        {t('extract.steps.firstStep.options.production')}
      </StyledRadioButton>
      <StyledRadioButton
        name="accumulation"
        value="accumulation"
        data-testid="accumulation-radio"
        id="radioaccumulation"
        onChange={() => {
          setRadioValue('accumulation');
          setFormat('pdf');
        }}
        checked={radioValue === 'accumulation'}
      >
        {t('extract.steps.firstStep.options.accumulation')}
      </StyledRadioButton>
    </ExtractStepWrapper>
  );
}

ExtractFirstStep.propTypes = {
  radioValue: PropTypes.string,
  setRadioValue: PropTypes.func.isRequired,
  setFormat: PropTypes.func.isRequired
};
