import React from 'react';
import PropTypes from 'prop-types';
import { ExtractStepWrapper, StyledDateInput } from './ExtractForm.styles';

export default function ExtractSecondStep({
  initialDate,
  finalDate,
  setInitialDateValue,
  setFinalDate,
  radioValue
}) {
  return (
    <ExtractStepWrapper
      disabled={radioValue === null || radioValue === 'accumulation'}
    >
      <StyledDateInput
        autoValidate
        label="Data inicial"
        value={initialDate}
        data-testid="initialDate-input"
        onChange={date => {
          setInitialDateValue(date);
        }}
        disabled={radioValue === null}
      />
      <StyledDateInput
        autoValidate
        label="Data final"
        data-testid="finalDate-input"
        value={finalDate}
        onChange={date => {
          setFinalDate(date);
        }}
        disabled={radioValue === null}
        minDate={initialDate}
      />
    </ExtractStepWrapper>
  );
}

ExtractSecondStep.propTypes = {
  radioValue: PropTypes.string,
  initialDate: PropTypes.instanceOf(Date),
  finalDate: PropTypes.instanceOf(Date),
  setInitialDateValue: PropTypes.func.isRequired,
  setFinalDate: PropTypes.func.isRequired
};
