import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'junto-ui';
import * as S from './ModalOptionStyles';

const getButtons = buttons => {
  return buttons.map(({ testid, onClick, text, variant = 'primary', ...rest }) => (
    <S.Button data-testid={testid} key={text} onClick={onClick} size="big" variant={variant} {...rest}>
      {text}
    </S.Button>
  ));
};

const ModalOption = ({
  children,
  icon,
  title = '',
  footnote = '',
  closeModal,
  buttons,
  ...rest
}) => {
  return (
    <Modal closeModal={closeModal} onBackdropClick={closeModal} {...rest}>
      <S.Wrapper>
        <S.Container>
          {icon}
          {title && <S.Title>{title}</S.Title>}
          {children}
          {buttons && getButtons(buttons)}
          {footnote && <S.Footnote>{footnote}</S.Footnote>}
        </S.Container>
      </S.Wrapper>
    </Modal>
  );
};

ModalOption.defaultProps = {
  children: null,
  buttons: null,
  icon: null
};

ModalOption.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object),
  closeModal: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.string]),
  title: PropTypes.string,
  footnote: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.string])
};

export default ModalOption;
