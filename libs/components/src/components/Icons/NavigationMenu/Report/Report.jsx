import React from 'react';

const Report = ({ className, color = 'currentColor', ...rest }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    {...rest}
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.021"
    >
      <path d="M25 10.932A9.93 9.93 0 0 0 15.068 1v9.922H25v.01z" />
      <path d="M22.998 14.192c-.106 6.074-5.116 10.912-11.19 10.806-6.074-.106-10.912-5.116-10.806-11.19.106-6.074 5.116-10.912 11.19-10.806" />
    </g>
  </svg>
);

export default Report;
