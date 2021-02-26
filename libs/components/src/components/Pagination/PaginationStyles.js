import styled from "styled-components";
import { colors, tokens } from "../../styles";

export const Container = styled.nav``;
export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const Item = styled.li``;
export const Ellipsis = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: ${tokens.font.weight.semibold};
  font-size: 16px;
  color: ${colors.slate};
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  appearance: none;
  border: none;
  background: none;
  outline: none;
  padding: 0;
  margin: 0;
  box-sizing: content-box;
  cursor: pointer;
  font-family: inherit;
  font-weight: ${tokens.font.weight.semibold};
  font-size: 16px;
  color: ${({ selected }) => (selected ? colors.periwinkle : colors.slate)};
  ${({ selected }) =>
    selected && `border-bottom: 2px solid ${colors.periwinkle};`}
`;
