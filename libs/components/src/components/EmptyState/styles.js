import styled from "styled-components";
import { Button as ButtonComponent } from "junto-ui";
import { EmptyList } from "../../components/Icons";
import { colors, tokens } from "../../styles";

export const EmptyTab = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 104px auto;
`;

export const Icon = styled(EmptyList)`
  margin-bottom: 32px;
`;

export const Button = styled(ButtonComponent)`
  min-width: 144px;
  font-family: ${tokens.font.family.metropolis};
  font-weight: ${tokens.font.weight.semibold};
`;

export const EmptyText = styled.span`
  max-width: 310px;
  color: ${colors.bluishGrey};
  text-align: center;
  line-height: 1.75em;
  font-size: 16px;
  margin-bottom: 32px;
`;
