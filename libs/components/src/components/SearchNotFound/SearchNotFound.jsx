import React from 'react';
import PropTypes from 'prop-types';

import { EmptyTab, EmptyText, Icon } from './styles';

const SearchNotFound = ({ text, actionLabel, action }) => (
  <EmptyTab>
    <Icon />
    <EmptyText>{text}</EmptyText>
  </EmptyTab>
);

SearchNotFound.propTypes = {
  text: PropTypes.string,
};

export default SearchNotFound;
