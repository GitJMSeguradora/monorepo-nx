import styled from 'styled-components';
import { colors } from '../../../styles';
import { tokens } from '@monorepo-nx/components';

export const PinWrapper = styled.div`
  max-width: 440px;
  margin: 0 auto;
  text-align: center;
  font-size: ${tokens.font.size.base};
  color: ${colors.slate};
`;

export const PinTitle = styled.h1`
  font-size: 2.6rem;
  line-height: 3.4rem;
  font-weight: ${tokens.font.weight.semibold};
  margin: 0 auto 1.3rem;
`;

export const PinSubtitle = styled.p`
  font-size: 2rem;
  line-height: 2.8rem;
  margin: 0 auto 26px;
`;

export const PinRecover = styled.button`
  background: none;
  border: none;
  font-weight: ${tokens.font.weight.semibold};
  font-family: inherit;
  cursor: pointer;
  margin-top: 8px;
  padding: 8px;
  color: ${colors.electricViolet};
`;
