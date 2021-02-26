import React from 'react';

const Help = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        fill={color}
        d="M11.536 14.857a.346.346 0 0 1-.255-.102.326.326 0 0 1-.102-.238c0-.238.006-.42.017-.544a2.983 2.983 0 0 1 .51-1.411c.283-.408.674-.861 1.173-1.36.385-.385.671-.703.859-.952a1.5 1.5 0 0 0 .314-.782c.045-.465-.105-.833-.45-1.105-.346-.272-.763-.408-1.25-.408-1.1 0-1.762.55-1.989 1.649-.08.26-.244.391-.493.391H8.391a.366.366 0 0 1-.28-.119A.432.432 0 0 1 8 9.57a3.364 3.364 0 0 1 .57-1.751c.357-.544.87-.983 1.538-1.317.669-.335 1.456-.502 2.363-.502.94 0 1.714.15 2.32.45.607.3 1.049.683 1.326 1.148.278.465.417.946.417 1.445 0 .567-.127 1.06-.383 1.479-.255.42-.631.901-1.13 1.445-.363.385-.643.717-.841.994a2.383 2.383 0 0 0-.4.893c-.045.283-.074.476-.085.578a.932.932 0 0 1-.187.323c-.068.068-.164.102-.289.102h-1.683zm-.051 3.213a.393.393 0 0 1-.289-.119.393.393 0 0 1-.119-.289v-1.513c0-.113.04-.21.119-.289a.393.393 0 0 1 .289-.119h1.683c.113 0 .212.04.298.119a.38.38 0 0 1 .127.289v1.513c0 .113-.04.21-.119.289a.414.414 0 0 1-.306.119h-1.683z"
      />
      <circle cx="12" cy="12" r="11.25" stroke={color} strokeWidth="1.5" />
    </g>
  </svg>
);

export default Help;
