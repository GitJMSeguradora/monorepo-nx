import React from 'react';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader';
import { colors } from '../../../styles';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 912px;
  height: 186px;
  appearance: none;
  cursor: pointer;
  border: solid 1px ${colors.cloudyBlue};
  background: ${colors.white};
  border-radius: 4px;
  padding: 24px;
  margin-bottom: 16px;

  &:first-of-type {
    margin-top: 24px;
  }
  &:last-of-type {
    margin-bottom: 0px;
  }
`;

export const Svg = styled(props => (
  <ContentLoader
    ariaLabel="Carregando tomadores..."
    primaryColor="#e0e7ec"
    secondaryColor="#f2f5f7"
    {...props}
  />
))`
  // width: 100%;
  // max-width: 912px;
  // height: 48px;
`;
