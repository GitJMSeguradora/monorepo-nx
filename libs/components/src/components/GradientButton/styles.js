import React from 'react';
import styled from 'styled-components';
import { Button } from 'junto-ui';

export default styled(props => <Button variant="primary" {...props} />)`
  width: 100%;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 4px;
  box-shadow: 0 8px 18px -4px rgba(153, 102, 255, 0.6);
  background-image: linear-gradient(77deg, #ab64f5, #8d85ee);
  border: none;
  outline: none;
  cursor: pointer;
  letter-spacing: 0.5px;
`;