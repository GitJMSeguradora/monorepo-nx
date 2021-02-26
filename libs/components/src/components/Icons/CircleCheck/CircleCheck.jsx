import React from 'react';

export default ({ color = '#3C9', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx="12" cy="12" r="11" stroke={color} strokeWidth="2" />
      <path
        fill={color}
        fillRule="nonzero"
        d="M16.293 8.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L10 14.586l6.293-6.293z"
      />
    </g>
  </svg>
);
