import React from "react";
import PropTypes from "prop-types";

// styles
import * as S from "./styles";

const Cards = ({ children, ...rest }) => {
  return <S.CardsList {...rest}>{children}</S.CardsList>;
};

Cards.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.string
  ]).isRequired
};

export default Cards;
