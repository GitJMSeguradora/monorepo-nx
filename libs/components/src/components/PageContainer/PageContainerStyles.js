import styled from 'styled-components';

const PageContainer = styled.main`
  height: 100vh;
  max-width: 60vw;
  margin: 0 auto;
  padding-top: 112px;
  ${({ theme }) => ({ ...theme.page })}
`;

export default PageContainer;
