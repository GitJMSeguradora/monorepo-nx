import React from 'react';

const Pencil = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd" stroke={color} strokeWidth="1.818">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1 20.663V14.95l12.7-12.7c1.671-1.671 4.391-1.661 6.059.006l-.305-.304a4.276 4.276 0 0 1-.001 6.052L6.714 20.663H1z"
      />
      <path d="M11 5l5.714 5.714" />
    </g>
  </svg>
);

export default Pencil;
