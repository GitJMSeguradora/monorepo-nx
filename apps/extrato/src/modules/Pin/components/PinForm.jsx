import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Forms } from '../../../styles';
import * as S from './PinForm.styles';

function PinForm({
  onSubmitHandler,
  onChangeHandler,
  onRecoverPin,
  inputValue,
  isLoading
}) {
  const { t } = useTranslation();

  return (
    <S.PinWrapper>
      <S.PinTitle>{t('pin.pageTitle')}</S.PinTitle>
      <S.PinSubtitle>{t('pin.pageSubtitle')}</S.PinSubtitle>

      <Forms.Form onSubmit={e => onSubmitHandler(e)}>
        <Forms.FormRow>
          <Forms.TextInput
            label={`${t('pin.pin')}`}
            placeholder=""
            onChange={({ target: { value } }) => onChangeHandler(value)}
            value={inputValue}
            options={{
              numericOnly: true
            }}
            data-testid="pin-input"
          />
          <S.PinRecover
            type="button"
            data-testid="pin-button-recover"
            onClick={e => {
              onRecoverPin(e);
            }}
          >
            {t('pin.pinRecoveryText')}
          </S.PinRecover>
        </Forms.FormRow>

        <Forms.FormRow>
          <Forms.Button
            size="big"
            type="submit"
            data-testid="pin-button-submit"
            variant="primary"
            isLoading={isLoading}
          >
            Acessar
          </Forms.Button>
        </Forms.FormRow>
      </Forms.Form>
    </S.PinWrapper>
  );
}

PinForm.propTypes = {
  onSubmitHandler: PropTypes.func,
  onChangeHandler: PropTypes.func,
  onRecoverPin: PropTypes.func,
  inputValue: PropTypes.string,
  isLoading: PropTypes.bool
};

export default PinForm;
