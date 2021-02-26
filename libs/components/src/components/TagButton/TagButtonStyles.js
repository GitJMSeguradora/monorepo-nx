/* eslint-disable no-shadow */
import styled, { css } from 'styled-components';
import { colors } from '../../styles';
import fonts from '../../styles/fonts';

export const Text = styled.span`
  color: ${colors.heather};
  font-size: 12px;
  font-weight: ${fonts.semibold};
  user-select: none;

  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TagWrapper = styled.div`
  padding: 8px 16px;
  background-color: ${colors.white};
  box-sizing: border-box;
  width: auto;
  height: 32px;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  border: solid 1px ${colors.mystic};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 350ms ease;
  flex-shrink: 0;

  ${props =>
    props.active &&
    css`
      background-color: ${colors.periwinkle};
      border-color: ${colors.periwinkle};

      & ${Text} {
        color: ${colors.white};
        margin-right: 8px;
      }
    `};

  ${props =>
    !props.active &&
    !props.disabled &&
    css`
      &:hover ${Text} {
        color: ${colors.periwinkle};
      }
    `};
`;

export const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  padding: 0px;
  border-radius: 50%;
  background-color: ${colors['cloudy-blue']};
  margin-right: -8px;
`;
