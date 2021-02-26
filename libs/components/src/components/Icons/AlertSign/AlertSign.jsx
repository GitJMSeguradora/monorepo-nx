import React from 'react';

const AlertSign = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width="67" height="80" viewBox="0 0 67 80" {...props}>
    <defs>
      <linearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stop-color="#FC3" />
        <stop offset="100%" stop-color="#F96" />
      </linearGradient>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <path
        fill="url(#prefix__a)"
        d="M0 3.333v73.334A3.333 3.333 0 003.333 80h60.334A3.333 3.333 0 0067 76.667V21.58c0-.444-.177-.869-.491-1.182L46.496.485A1.667 1.667 0 0045.321 0H3.333A3.333 3.333 0 000 3.333z"
        opacity=".8"
      />
      <path
        stroke="#FFF"
        stroke-width="2"
        d="M50.044 57.733H17.246a2.99 2.99 0 01-2.122-.878 3 3 0 01-.475-3.624l16.4-28.347a2.99 2.99 0 011.822-1.396 3 3 0 013.37 1.396l16.4 28.347c.415.717.5 1.534.302 2.276a3 3 0 01-2.898 2.226z"
        opacity=".5"
      />
      <path
        stroke="#FFF"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M33.5 33L33.5 47"
        opacity=".504"
      />
      <circle cx="33.5" cy="52" r="1" fill="#FFF" opacity=".497" />
      <path fill="#F96" d="M46.063 0v17.227a3.333 3.333 0 003.333 3.333h17.337" opacity=".4" />
    </g>
  </svg>
);

export default AlertSign;
