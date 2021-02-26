import styled from 'styled-components';
import { tokens, palette } from '@monorepo-nx/components';

export const BadgeWrapper = styled.figure`
  margin: 0;
  padding: 0;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const BadgeCaption = styled.figcaption`
  margin: ${tokens.spacing.s} 0 0;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const BadgeSubtitle = styled.span`
  ${tokens.font.family.semiBold}

  display: block;
  color: ${palette['color-black']};
  font-weight: ${tokens.font.weight.semiBold};
  font-size: ${tokens.font.size.s};
  line-height: ${tokens.font.lineHeight.xs};
  letter-spacing: 9px;
  margin-bottom: 1px;
  direction: rtl;
  text-indent: -9px;
`;

export const BadgeTitle = styled.strong`
  ${tokens.font.family.extraBold};

  display: block;
  color: ${palette['color-brand-primary']};
  font-weight: ${tokens.font.weight.extraBold};
  font-size: ${tokens.font.size.l};
  line-height: ${tokens.font.lineHeight.s};
`;
