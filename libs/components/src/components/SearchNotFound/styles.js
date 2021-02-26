import styled from "styled-components";
import { ProcessSearchNotFound } from "../../components/Icons";
import { colors } from "../../styles";

export const EmptyTab = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 104px auto;
`;

export const Icon = styled(ProcessSearchNotFound)`
  margin-bottom: 32px;
`;

export const EmptyText = styled.span`
  max-width: 380px;
  color: ${colors.bluishGrey};
  text-align: center;
  line-height: 1.75em;
  font-size: 16px;
  margin-bottom: 32px;
`;
