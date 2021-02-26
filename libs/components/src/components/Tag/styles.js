import styled, { css } from "styled-components";
import { palette, tokens } from "@monorepo-nx/components";

const variants = {
  primary: css`
    background-color: ${palette.primaryLight};
    color: ${palette.primary};
  `,
  error: css`
    background-color: ${palette.errorLight};
    color: ${palette.error};
  `,
  warning: css`
    background-color: ${palette.warningLight};
    color: ${palette.warning};
  `,
  success: css`
    background-color: ${palette.successLight};
    color: ${palette.success};
  `
};

export const Tag = styled.div`
  display: inline-block;
  padding: 0 ${tokens.spacing.s};
  border-radius: 4px;
  font-weight: ${tokens.font.weight.semibold};
  font-size: ${tokens.font.size.xs};
  line-height: ${tokens.font.lineHeight.xs};

  ${({ variant }) => variant && variants[variant]};
`;
