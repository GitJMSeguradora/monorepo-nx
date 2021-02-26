import React from 'react';

const Close = ({ color = 'inherit', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...props}>
    <g fill={color} fillRule="nonzero">
      <path d="M7.19 7.192L14.046.335a1.142 1.142 0 1 1 1.616 1.616L8.806 8.808A1.142 1.142 0 1 1 7.19 7.192zm1.616 0l6.856 6.857a1.143 1.143 0 0 1-1.616 1.616L7.19 8.808a1.143 1.143 0 0 1 1.616-1.616z"></path>
      <path d="M8.806 7.192A1.143 1.143 0 0 1 7.19 8.808L.335 1.951A1.143 1.143 0 0 1 1.95.335l6.855 6.857zm-1.616 0a1.142 1.142 0 1 1 1.616 1.616l-6.855 6.857A1.142 1.142 0 1 1 .335 14.05L7.19 7.192z"></path>
    </g>
  </svg>
);

export default Close;
