import React from 'react';

const Escalada = ({ color = 'currentColor', ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20 4.4126C20 6.30036 15.7464 7.82717 10.4977 7.82717C5.24947 7.82717 1 6.30036 1 4.4126C1 2.52681 5.24947 1 10.4977 1C15.7464 1 20 2.52681 20 4.4126Z" stroke={color} stroke-width="1.8"/>
    <path d="M20 9.13843C20 11.0239 15.7464 12.5504 10.4977 12.5504C5.24947 12.5507 1 11.0239 1 9.13843" stroke={color} stroke-width="1.8"/>
    <path d="M20 13.8621C20 15.7478 15.7464 17.277 10.4977 17.277C5.24947 17.277 1 15.7478 1 13.8621" stroke={color} stroke-width="1.8"/>
  </svg>

);

export default Escalada;
