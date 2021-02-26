import React from 'react';
import PropTypes from 'prop-types';

// styles
import * as S from './styles';

const Tag = ({ text, variant, ...rest }) => {
  return (
    <S.Tag variant={variant} {...rest}>
      {text}
    </S.Tag>
  );
};

Tag.defaultProps = {
  variant: 'primary'
}

Tag.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string
};

export default Tag;