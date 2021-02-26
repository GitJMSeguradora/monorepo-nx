import React from 'react';

const Person = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" {...props}>
    <path
      fill={color}
      fillRule="nonzero"
      d="M9.642.117c-2.966 0-5.388 2.469-5.388 5.491 0 3.023 2.422 5.491 5.388 5.491 2.965 0 5.388-2.468 5.388-5.49 0-3.023-2.423-5.492-5.388-5.492zm0 1.734c2.046 0 3.686 1.672 3.686 3.757s-1.64 3.757-3.686 3.757c-2.046 0-3.687-1.672-3.687-3.757s1.64-3.757 3.687-3.757zm-3.97 10.115c-3.313 0-5.389 2.68-5.389 5.491v5.492a.87.87 0 0 0 .422.76.837.837 0 0 0 .858 0 .87.87 0 0 0 .422-.76v-5.492c0-2.003 1.229-3.757 3.687-3.757h7.94c2.458 0 3.686 1.754 3.686 3.757a.87.87 0 0 0 .422.762.837.837 0 0 0 .858 0 .87.87 0 0 0 .422-.762c0-2.811-2.075-5.49-5.388-5.49h-7.94zm12.468 7.496a.843.843 0 0 0-.602.264.876.876 0 0 0-.24.622v2.6a.87.87 0 0 0 .422.762.837.837 0 0 0 .858 0 .87.87 0 0 0 .422-.761v-2.601a.876.876 0 0 0-.246-.629.843.843 0 0 0-.614-.257z"
    />
  </svg>
);

export default Person;
