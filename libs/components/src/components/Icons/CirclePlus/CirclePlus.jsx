import React from 'react';

const CirclePlus = props => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g fill="currentColor" fillRule="evenodd" opacity=".8">
        <path d="M13 13v4.217c0 .433-.448.783-1 .783s-1-.35-1-.783V13H6.783C6.35 13 6 12.552 6 12s.35-1 .783-1H11V6.783C11 6.35 11.448 6 12 6s1 .35 1 .783V11h4.217c.433 0 .783.448.783 1s-.35 1-.783 1H13z"/>
        <path fillRule="nonzero" d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1.722c5.677 0 10.278-4.601 10.278-10.278 0-5.677-4.601-10.278-10.278-10.278C6.323 1.722 1.722 6.323 1.722 12c0 5.677 4.601 10.278 10.278 10.278z"/>
    </g>
</svg>

);

export default CirclePlus;
