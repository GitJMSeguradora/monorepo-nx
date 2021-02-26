import styled, { createGlobalStyle } from "styled-components";
import { SearchInput, Select, Button as ButtonComponent } from "junto-ui";
import DatePicker from "junto-ui/DatePicker";
import { SearchIcon as SearchIconComponent } from "../../../Icons";
import { colors, tokens } from "../../../../styles";

export const StyledInput = styled(SearchInput)`
  height: 64px;
  min-height: 64px;

  ${({ withfilter }) =>
    withfilter ? `max-width: 700px;` : `max-width: 864px;`}

  & .search-container {
    min-height: inherit;
    height: inherit;

    ${({ withfilter }) =>
      withfilter &&
      ` border-top-left-radius: 0;
      border-bottom-left-radius: 0;`}

    &:focus-within,
    &:hover,
    &:active {
      z-index: 2;
    }
  }

  & .search-input {
    min-height: inherit;
    height: inherit;
  }

  /* & .search-icon {
    /* transform: translate(-24px, 20px); */
  } */
`;

export const StyledSelect = styled(Select)`
  max-width: 700px;
  height: 64px;

  & div:first-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &:focus-within,
    &:hover {
      z-index: 2;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
  width: 700px;
  height: 64px;
  padding: 0 16px;
  border: 1px solid ${colors.cloudyBlue};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;

  &:focus-within,
  &:hover,
  &:active {
    z-index: 2;
    border-color: ${colors.periwinkle};
  }
`;

export const Button = styled(ButtonComponent)`
  height: 64px;
  padding-top: 1px;
  font-family: ${tokens.font.family.metropolis};
  font-weight: ${tokens.font.weight.semibold};
  font-size: 16px;
  color: ${colors.blueyGrey};
  padding: 0;
  border: none;
`;

export const SearchIcon = styled(SearchIconComponent)`
  width: 28px;
  height: 28px;
  margin-top: 1px;
  margin-right: -6px;
`;

export const DateSelection = styled(DatePicker)``;

export const ModalDeactive = createGlobalStyle`
  body {
    overflow: auto;
  }
`;
