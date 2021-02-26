import React from "react";
import PropTypes from "prop-types";

// styles
import * as S from "./styles";

const Card = ({ children, ...rest }) => {
  return <S.Card {...rest}>{children}</S.Card>;
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.string
  ]).isRequired
};

export default Card;
