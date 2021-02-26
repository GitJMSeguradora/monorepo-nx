import styled, { keyframes } from "styled-components";
import { ArrowRightIcon } from "junto-ui";
import { tokens, palette, colors } from "@monorepo-nx/components";

const heightAnimation = keyframes`
  from { height: 100px; opacity: 0; }
  to { height: 185px; opacity: 1; }
`;

export const Container = styled.div`
  display: flex;
  width: 864px;
  overflow: hidden;
  margin-top: ${tokens.spacing.m};
  animation: ${heightAnimation} 0.3s linear;
  background-color: #f6fafc;
  border-radius: 4px;
  padding: ${tokens.spacing.l} 0;
  color: ${palette.text};
  align-items: center;
`;

export const Logo = styled.img`
  width: 269px;
`;

export const Title = styled.p`
  font-size: ${tokens.font.size.l};
  line-height: 34px;
  font-family: ${tokens.font.family.metropolis};
  font-weight: ${tokens.font.weight.semibold};
`;

export const SubTitle = styled.p`
  ${tokens.font.s}
  color: ${colors.bluishGrey};
  margin-bottom: ${tokens.spacing.m};

  & > strong {
    font-family: ${tokens.font.family.metropolis};
    font-weight: ${tokens.font.weight.semibold};
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 23px;
`;

export const Column = styled.div`
  padding: 0 ${tokens.spacing.l};
  ${({ width }) => (width ? `flex: 0 0 ${width}px;` : "flex: 1 1 auto")};
  ${({ last }) => last && `flex: 0 0 auto; margin-left: auto;`};
`;

export const ProgressWrapper = styled.div`
  &:not(:last-child) {
    margin: 0 0 ${tokens.spacing.m};
  }
`;

export const ProgressContainer = styled.div`
  width: 250px;
`;

export const ArrowRight = styled(ArrowRightIcon)`
  color: ${palette.primary};
  width: 22px !important;
  height: 22px !important;
`;

export const Button = styled.button`
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  align-items: center;
  border: 0;
  cursor: pointer;
  outline: none;
  appearance: none;
  background: none;
  max-width: 260px;
  height: 20px;
  padding: 0;
  color: ${palette.primary};
  font-size: ${tokens.font.size.s};
  line-height: ${tokens.font.lineHeight.s};
  font-family: ${tokens.font.family.metropolis};
  font-weight: ${tokens.font.weight.semibold};
  margin: ${tokens.spacing.m} -5px 0 auto;
  ${({ width }) => width && `width: ${width}px;`}
`;

/**
 * Premium widget
 */
export const Premium = styled.div``;

export const PremiumTitle = styled.p`
  margin: 0;
  font-size: ${tokens.font.size.s};
  font-family: ${tokens.font.family.metropolis};
  font-weight: ${tokens.font.weight.semibold};
`;

export const PremiumAmount = styled.p`
  position: relative;
  padding-left: ${tokens.spacing.l};
  font-size: 32px;
  line-height: ${tokens.font.lineHeight.xl};
  font-family: ${tokens.font.family.metropolis};
  font-weight: ${tokens.font.weight.semibold};

  &::before {
    position: absolute;
    left: 0;
    top: ${tokens.spacing.xs};
    display: inline-block;
    vertical-align: super;
    content: "R$";
    font-size: ${tokens.font.size.s};
    line-height: ${tokens.font.lineHeight.s};
    margin-right: ${tokens.spacing.xs};
    color: ${colors.blueyGrey};
  }
`;

export const UpdatedAt = styled.p`
  ${tokens.font["xs-2"]};
`;
