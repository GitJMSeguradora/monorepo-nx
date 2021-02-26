import styled from "styled-components";
import { tokens, palette } from "@monorepo-nx/components";

export const Card = styled.div`
  border: 1px solid ${palette.border};
  padding: ${tokens.spacing.l};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0);
  transition: box-shadow 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 4px;

  &:hover {
    box-shadow: 0 24px 40px rgba(0, 0, 0, 0.15);
  }
`;
