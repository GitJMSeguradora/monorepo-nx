import styled from "styled-components";
import { tokens, colors, palette } from "@monorepo-nx/components";

const renderTrailBackground = value => {
  if (value > 0 && value <= 33) {
    return `background-color: ${palette.error}`;
  } else if (value > 33 && value <= 66) {
    return `background-color: ${palette.warning}`;
  } else if (value > 66 && value <= 100) {
    return `background-color: ${palette.success}`;
  }

  return `background-color: ${palette.success}`;
};

export const Label = styled.label`
  display: block;
  font-size: ${tokens.font.size.xs};

  font-family: ${tokens.font.family.metropolis};
  font-weight: ${tokens.font.weight.semibold};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const ProgressStatus = styled.div`
  ${tokens.font.xs}
  margin-left: auto;
`;

export const ProgressWrapper = styled.div`
  ${tokens.font.base};
`;

export const FootNote = styled.p`
  ${tokens.font["xs-2"]}
  font-style: italic;
  margin: ${tokens.spacing.s} 0 0 0;
`;

export const Progress = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  margin: 0;
  display: block;
  border: none;

  // background trail
  &::-webkit-progress-bar {
    background-color: ${colors.lightGreyish};
    border-radius: 2px;
    overflow: hidden;
  }

  // For when there's a value set
  &[value] {
    &::-webkit-progress-value {
      border-radius: 2px;
      width: 0;
      transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      transition-delay: 0.5s;
      ${({ value }) => value && renderTrailBackground(value)}
    }
  }
`;
