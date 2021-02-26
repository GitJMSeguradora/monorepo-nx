import React from "react";
import styled from "styled-components";
import MuiMenu from "@material-ui/core/Menu";
import MuiMenuItem from "@material-ui/core/MenuItem";
import { colors, tokens } from "../../../styles";

export const Menu = styled(props => (
  <MuiMenu {...props} classes={{ paper: "styled-paper" }} />
))`
  & .styled-paper {
    padding: 16px 0;
  }
`;

export const MenuItem = styled(props => (
  <MuiMenuItem {...props} classes={{ root: "styled-root" }} />
))`
  &.styled-root {
    color: ${colors.blueyGrey};
    transition: all 300ms ease;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    min-width: 200px;
    font-family: ${tokens.font.family.metropolis};
    font-weight: ${tokens.font.weight.semibold};
    height: 32px !important;

    &:focus {
      color: ${colors.periwinkle};
    }

    &:hover {
      color: ${colors.periwinkle};
      background-color: rgba(0, 0, 0, 0.08) !important;
    }
  }
`;

export const MenuItemText = styled.p`
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: inherit;
  margin: 2px 0 0 8px;
`;
