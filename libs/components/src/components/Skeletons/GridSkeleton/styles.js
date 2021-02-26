import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 912px;
  height: 140px;
  padding: 24px 12px;
  position: relative;

  & span {
    font-size: 12px;
    color: #859099;
    position: absolute;

    &:nth-child(1) {
      top: 24px;
      left: 12px;
    }

    &:nth-child(2) {
      top: 24px;
      right: 109px;
    }

    &:nth-child(3) {
      top: 81px;
      left: 12px;
    }

    &:nth-child(4) {
      top: 81px;
      right: 90px;
    }
  }
`;
