import React from 'react';
import PropTypes from 'prop-types';
import { CircleWarningIcon, CircleCheckIcon, CircleErrorIcon, CloseIcon } from '../Icons';
import { palette } from '../../styles';
import { CustomSnackbar, SnackbarContent, MessageContainer, CloseButton } from './styles';

const variantIcon = {
  success: CircleCheckIcon,
  warning: CircleWarningIcon,
  error: CircleErrorIcon
};

const variantColor = {
  success: palette.success,
  warning: palette.warning,
  error: palette.error
};

const Snackbar = ({ open, onClose, variant, message, autoHideDuration, ...props }) => {
  const Icon = variantIcon[variant];
  const Message = (
    <MessageContainer color={variantColor[variant]}>
      <Icon />
      {message}
    </MessageContainer>
  );

  return (
    <CustomSnackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <SnackbarContent
        aria-describedby="feedback-snackbar"
        message={Message}
        action={[
          <CloseButton key="close" data-testid="toast-close" aria-label="close" onClick={onClose}>
            <CloseIcon className="close-icon" color="#fff" />
          </CloseButton>
        ]}
        {...props}
      />
    </CustomSnackbar>
  );
};

Snackbar.defaultProps = {
  message: '',
  autoHideDuration: 3000
};

Snackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
  message: PropTypes.string,
  autoHideDuration: PropTypes.oneOf(['string', 'number'])
};

export default Snackbar;
