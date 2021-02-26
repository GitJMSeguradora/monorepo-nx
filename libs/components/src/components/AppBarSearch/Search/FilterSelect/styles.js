import styled from 'styled-components';
import { Select as SelectComponent } from 'junto-ui';

export const Container = styled.div`
  width: 169px;
  margin-right: -1px;
`;

export const Select = styled(SelectComponent)`
  height: 64px;

  & div:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    z-index: 1;
  }

  .react-select__single-value {
    position: relative !important;
  }

  .react-select__menu div:first-child {
    border-bottom-right-radius: 4px;
  }

  .react-select__menu-list div {
    padding-left: 16px;
  }
`;
