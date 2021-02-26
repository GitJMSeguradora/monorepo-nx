import styled from 'styled-components';

const PageWrapper = styled.main`
  min-height: 100vh;
  height: 100%;
  width: 100%;

  ${({ theme }) => ({ ...theme.page })}
`;

export default PageWrapper;
