import React from 'react';

const CheckIcon = ({ color = '#fff', ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" {...props}>
    <path
      fill={color}
      fillRule="nonzero"
      d="M10.293.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L4 6.586 10.293.293z"
    />
  </svg>
);

export default CheckIcon;
