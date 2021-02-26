import React, { Component } from 'react';
import { TagWrapper, Text, IconWrapper } from './TagButtonStyles';
import CloseIcon from '../Icons/CircleClose';

class TagButton extends Component {
  constructor() {
    super();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClearHandler = this.onClearHandler.bind(this);
  }

  onClickHandler(event) {
    const { onClick, disabled } = this.props;
    if (onClick && !disabled) onClick(event);
  }

  onClearHandler(event) {
    const { disabled, onClear } = this.props;
    if (!disabled) {
      event.stopPropagation();
      if (onClear) onClear(event);
    }
  }

  render() {
    const {
      onClear,
      onClick,
      disabled,
      active,
      close,
      text,
      className,
      ...otherProps
    } = this.props;

    return (
      <TagWrapper
        className={className}
        disabled={disabled}
        active={active}
        close={close}
        onClick={this.onClickHandler}
        {...otherProps}
      >
        <Text>{text}</Text>

        {active && !disabled && close && (
          <IconWrapper onClick={this.onClearHandler}>
            <CloseIcon />
          </IconWrapper>
        )}
      </TagWrapper>
    );
  }
}

TagButton.defaultProps = {
  close: true
};

export default TagButton;
