import React from 'react';

const Calendar = props => (
  <svg
    className={props.className}
    onClick={props.onClick}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h32v32H0z" />
      <path
        fill="#96F"
        stroke="#96F"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.058 9v.815h-4.115V9h-2.464v.815H9V22h14V9.815h-2.464V9h-2.478zm.825 2.431h.826V9.815h-.826v1.616zm-6.592 0h.826V9.815h-.826v1.616zm8.245-.815h1.638v2.515H9.826v-2.515H20.536zM9.826 21.185h12.348V13.93H9.826v7.254z"
      />
    </g>
  </svg>
);

export default Calendar;
