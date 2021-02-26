import React from 'react';
import { StyledInput } from './styles';

const SearchInput = ({ withfilter, ...props }) => (
  <StyledInput {...props} withfilter={withfilter ? 1 : 0} />
);

export default SearchInput;
