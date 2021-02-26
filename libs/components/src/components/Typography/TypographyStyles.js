import styled from 'styled-components';
import colors from '../../styles/colors';

const Typography = styled.h1`
  padding: 8px 0;
  color: ${colors.slate};

  ${({ variant }) => variant === 'headline' && `
    font-size: 26px;
  `}

  ${({ variant }) => variant === 'subheadline' && `
    font-size: 18px;
  `}
`;

export default Typography;