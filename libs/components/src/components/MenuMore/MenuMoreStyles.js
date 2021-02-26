import React from "react";
import styled from "styled-components";
import MuiMoreIcon from "@material-ui/icons/MoreVert";
import MuiMenu from "@material-ui/core/Menu";
import MuiMenuItem from "@material-ui/core/MenuItem";
import { colors, tokens } from "../../styles";

export const Menu = styled(props => (
  <MuiMenu {...props} classes={{ paper: "styled-paper" }} />
))`
  & .styled-paper {
    padding: 16px 0;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.22);
  }
`;

export const MenuItem = styled(props => (
  <MuiMenuItem {...props} classes={{ root: "styled-root" }} />
))`
  &.styled-root {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    min-width: 175px;
    color: ${colors.blueyGrey};
    font-family: ${tokens.font.family.metropolis};
    font-weight: ${tokens.font.weight.semibold};
    transition: all 300ms ease;
    height: 32px;
    box-sizing: boder-box;
    padding: 0 16px;
    margin-bottom: 4px;

    &:hover {
      color: ${colors.periwinkle};
      background-color: ${colors.paleGrey} !important;
    }
  }
`;

export const MoreIcon = styled(MuiMoreIcon)`
  color: ${colors.periwinkle};
  width: 24px !important;
  height: 24px !important;
`;

export const MenuItemText = styled.p`
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: inherit;
  margin: 2px 0 0 0;
  /* text-transform: uppercase; */
`;
