import React from 'react';

export default ({ color = '#f66', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <circle cx="12" cy="12" r="11" stroke={color} strokeWidth="2" />
      <path
        fill={color}
        d="M12 10.913l2.502-2.501a.84.84 0 0 1 1.188 0l.226.225a.84.84 0 0 1 0 1.189l-2.502 2.502 2.502 2.501a.84.84 0 0 1 0 1.189l-.226.226a.84.84 0 0 1-1.188 0L12 13.742l-2.502 2.502a.84.84 0 0 1-1.188 0l-.226-.226a.84.84 0 0 1 0-1.189l2.502-2.501-2.502-2.502a.84.84 0 0 1 0-1.189l.226-.225a.84.84 0 0 1 1.188 0L12 10.913z"
      />
    </g>
  </svg>
);
