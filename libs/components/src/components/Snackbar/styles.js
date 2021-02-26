import React from "react";
import styled from "styled-components";
import MuiSnackbar from "@material-ui/core/Snackbar";
import MuiSnackbarContent from "@material-ui/core/SnackbarContent";
import { colors, tokens } from "../../styles";

export const CustomSnackbar = styled(props => (
  <MuiSnackbar
    classes={{ anchorOriginTopRight: "styled-anchorOriginTopRight" }}
    {...props}
  />
))`
  &.styled-anchorOriginTopRight {
    top: 120px;
  }
`;

export const SnackbarContent = styled(props => (
  <MuiSnackbarContent
    classes={{
      root: "styled-root",
      message: "styled-message",
      action: "styled-action"
    }}
    {...props}
  />
))`
  &.styled-root {
    background-color: #fff;
    min-height: 64px;
    padding: 16px;
    margin-top: -130px;
  }

  & .styled-message {
    font-size: 12px;
    font-weight: ${tokens.font.weight.semibold};
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    line-height: 1.33;
    color: ${colors.slate};
  }

  & .styled-action {
    margin-right: 0;
  }
`;

export const MessageContainer = styled.span`
  display: flex;
  align-items: center;

  & svg {
    margin-right: 16px;
  }
`;

export const CloseButton = styled.button`
  outline: none;
  border: none;
  width: 16px;
  height: 16px;
  background: ${colors.cloudyBlue};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & .close-icon {
    width: 8px;
    height: 8px;
  }
`;
