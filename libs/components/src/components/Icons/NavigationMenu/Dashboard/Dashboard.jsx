import React from 'react';

const Dashboard = ({ color = 'currentColor', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 26" {...props}>
    <g fill={color} fillRule="evenodd">
      <path d="M8.4 0H1.8A1.8 1.8 0 0 0 0 1.8v6.6a1.8 1.8 0 0 0 1.8 1.8h6.6a1.8 1.8 0 0 0 1.8-1.8V1.8A1.8 1.8 0 0 0 8.4 0zm0 8.4H1.8V1.8h6.6v6.6zM21.6 0H15a1.8 1.8 0 0 0-1.8 1.8v6.6a1.8 1.8 0 0 0 1.8 1.8h6.6a1.8 1.8 0 0 0 1.8-1.8V1.8A1.8 1.8 0 0 0 21.6 0zm0 8.4H15V1.8h6.6v6.6zM8.4 13.2H1.8A1.8 1.8 0 0 0 0 15v6.6a1.8 1.8 0 0 0 1.8 1.8h6.6a1.8 1.8 0 0 0 1.8-1.8V15a1.8 1.8 0 0 0-1.8-1.8zm0 8.4H1.8V15h6.6v6.6zM21.6 13.2H15a1.8 1.8 0 0 0-1.8 1.8v6.6a1.8 1.8 0 0 0 1.8 1.8h6.6a1.8 1.8 0 0 0 1.8-1.8V15a1.8 1.8 0 0 0-1.8-1.8zm0 8.4H15V15h6.6v6.6z" />
    </g>
  </svg>
);

export default Dashboard;
