import React from 'react';

const Extrato = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" {...props}>
    <g fill="none" fillRule="evenodd" stroke={color}>
      <rect width="18.5" height="22.5" x=".75" y=".75" strokeWidth="1.5" rx="3" />
      <path strokeLinecap="round" strokeWidth="2" d="M6 7.5h8M6 11.5h8M6 15.5h4" />
    </g>
  </svg>
);

export default Extrato;
