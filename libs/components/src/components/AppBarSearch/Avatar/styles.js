import styled from "styled-components";
import { tokens } from "../../../styles";

export const StyledAvatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: #acbec7;
  border-radius: 50%;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: white;
  font-weight: ${tokens.font.weight.semibold};
  line-height: 40px;
  user-select: none;
  cursor: pointer;
  flex-shrink: 0;
  position: relative;
  text-transform: uppercase;

  &::before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border: solid 2px #ffffff;
    background-color: #9966ff;
    border-radius: 50%;
    top: 0;
    right: 0;
  }
`;
