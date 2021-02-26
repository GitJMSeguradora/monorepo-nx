import styled from "styled-components";
import { Button as ButtonComponent } from "junto-ui";
import { palette, colors, tokens } from "../../styles";

export const Wrapper = styled.div`
  width: 440px;
  padding: 64px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${colors.white};
  color: ${palette["color-dark"]};

  ${tokens.font.base};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  & > p {
    margin: 0 0 ${tokens.spacing.l};
  }
`;

export const Title = styled.h2`
  font-weight: ${tokens.font.weight.semibold};
  font-size: ${tokens.font.size.l};
  line-height: ${tokens.font.lineHeight.l};
  margin: 0 0 ${tokens.spacing.m};
  color: inherit;
`;

export const Button = styled(ButtonComponent)`
  width: 312px;
  margin-top: 24px;
`;

export const Footnote = styled.p`
  text-align: center;
  margin: 16px 0 0;
  font-size: 10px;
`;
