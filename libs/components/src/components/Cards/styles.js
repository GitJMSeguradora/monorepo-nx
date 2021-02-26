import styled from "styled-components";
import { tokens } from "@monorepo-nx/components";

export const CardsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${tokens.spacing.l};
  grid-auto-rows: auto;

  @media ${tokens.mediaQueries.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
