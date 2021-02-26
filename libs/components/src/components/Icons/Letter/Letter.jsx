import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ circleColor }) => circleColor};
`;

const LetterComponent = styled.span`
  color: ${({ letterColor }) => letterColor};
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Letter = ({ circleColor, letterColor, letter, ...props }) => (
  <Circle {...props} circleColor={circleColor}>
    <LetterComponent letterColor={letterColor}>{letter}</LetterComponent>
  </Circle>
);

Letter.defaultProps = {
  letterColor: '#9966ff',
  circleColor: '#ffffff'
};

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  letterColor: PropTypes.string,
  circleColor: PropTypes.string
};

export default Letter;
