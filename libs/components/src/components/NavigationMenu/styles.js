import React from "react";
import styled from "styled-components";
import { TransitionGroup } from "react-transition-group";
import { colors, palette, tokens } from "../../styles";

export const TransitionContainer = styled(TransitionGroup)`
  display: block;
  position: relative;
`;

export const NavigationContainer = styled.nav`
  box-sizing: border-box;
  width: ${({ collapsed }) => (collapsed ? "88px" : "220px")};
  transition: width 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  border-right: 1px solid ${palette["color-grey-300"]};
  background-color: ${palette["color-white"]};
  flex-shrink: 0;
  height: 100vh;
  display: flex;
  outline: none;
  position: sticky;
  left: 0;
  top: 0;
  right: auto;
  overflow-y: auto;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
  z-index: 10;

  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.26);
  }
`;

export const StyledGradientButton = styled.a`
  align-items: center;
  backface-visibility: hidden;
  background-color: ${palette.primary};
  border-radius: 4px;
  border: none;
  box-shadow: 0 12px 26px -4px rgba(153, 102, 255, 0.5);
  color: #ffffff;
  cursor: pointer;
  display: flex;
  flex-shrink: 0;
  font-weight: ${tokens.font.weight.semibold};
  font-size: 10px;
  font-stretch: normal;
  font-style: normal;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.5px;
  max-height: 40px;
  max-width: 172px;
  outline: none;
  padding: ${({ collapsed }) => (collapsed ? "0" : "0 16px")};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: box-shadow 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  user-select: none;
  width: 100%;
  will-change: box-shadow;

  span {
    opacity: ${({ collapsed }) => (collapsed ? 0 : 1)};
    width: ${({ collapsed }) => (collapsed ? 0 : "auto")};
    padding-left: ${({ collapsed }) => (collapsed ? 0 : "8px")};
    padding-top: ${({ collapsed }) => (collapsed ? 0 : "2px")};
  }
`;

export const NavigationHeader = styled.div`
  min-height: 172px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 16px;
  box-sizing: border-box;

  svg,
  span {
    pointer-events: none;
  }
`;

export const NavigationList = styled.ul`
  width: 100%;
`;

export const NavigationText = styled.div`
  white-space: nowrap;
  transition: opacity 150ms ease-in-out;
  pointer-events: none;
`;

export const NavigationItem = styled.li`
  font-weight: ${tokens.font.weight.semibold};
  font-size: 12px;
  line-height: 1.67;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  margin: 12px 0;
  min-height: 40px;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  display: flex;
  flex-shrink: 0;
  transition: color 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  color: ${({ active }) =>
    active ? palette.primary : palette["color-grey-400"]};

  &:last-child {
    padding-bottom: 16px;
  }

  &:hover {
    color: ${palette.primary};
  }
`;

export const NavigationItemContent = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px 0 32px;
  text-decoration: none;
  color: inherit;
  position: relative;

  > div {
    margin-left: 18px;
  }

  &:visited {
    color: inherit;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 40px;
    background-color: ${({ active }) =>
      active ? colors.periwinkle : "transparent"};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    transition: background-color 150ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
`;

export const NavigationItemIcon = styled(
  ({ component: Component, showBadge, ...props }) => (
    <>
      {showBadge && <BadgeSpan {...props} />}
      <Component {...props} />
    </>
  )
)`
  width: 24px;
  height: 24px;
  pointer-events: none;
`;

const BadgeSpan = styled.div`
  position: absolute;
  top: 15%;
  margin: -2px 0 0 ${tokens.spacing.m};
  border: 2px solid ${palette["color-white"]};
  background-color: ${palette.primary};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transition: opacity 0.15s ease;
  opacity: ${({ collapsed }) => (collapsed ? "1" : "0")};
`;
