import React from "react";
import styled from "styled-components";
import MuiTooltip from "@material-ui/core/Tooltip";
import IconButtonComponent from "@material-ui/core/IconButton";
import ArrowBackComponent from "@material-ui/icons/ArrowBack";
import { SearchIcon as SearchIconComponent } from "../Icons";
import { tokens, colors } from "../../styles";

export const InputContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`;

export const Tooltip = styled(props => (
  <MuiTooltip
    classes={{ popper: props.className, tooltip: "styled-tooltip" }}
    {...props}
  />
))`
  & .styled-tooltip {
    font-size: 10px;
    font-family: "Metropolis";
    font-weight: ${tokens.font.weight.semibold};
  }
`;

export const BackButtonIcon = styled(ArrowBackComponent)`
  color: ${colors.periwinkle};
`;

export const BackButton = styled(props => (
  <IconButtonComponent
    {...props}
    classes={{ root: "styled-root", label: "styled-label" }}
  />
))`
  & svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    transition: transform 0.3s ease-in-out;
  }

  & .styled-label {
    font-size: 14px;
    font-weight: ${tokens.font.weight.semibold};
    color: ${colors.periwinkle};
  }

  &.styled-root {
    padding: 16px 0;
    span:not(.styled-label) {
      opacity: 0;
    }

    &:hover {
      background-color: transparent;

      & svg {
        transform: translateX(-3px);
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const AvatarContainer = styled.div`
  position: relative;
  margin-left: 24px;

  @media (min-width: 1024px) {
    position: absolute;
    right: 24px;
  }
`;

export const SearchIcon = styled(SearchIconComponent)`
  width: 28px;
  height: 28px;
  margin-right: 10px;
`;
