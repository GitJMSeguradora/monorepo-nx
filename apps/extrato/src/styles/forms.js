import styled from 'styled-components';
import {
  TextInput as TextInputElement,
  Button as ButtonElement
} from 'junto-ui';

/**
 * Form element
 */
export const Form = styled.form``;

/**
 * Default form row wrapper
 */
export const FormRow = styled.div`
  margin: 26px 0 0;
`;

/**
 * Default text input styles
 */
export const TextInput = styled(TextInputElement)``;

/**
 * Default button styles
 */
export const Button = styled(ButtonElement)`
  width: 100%;
  font-family: 'Metropolis', sans-serif;
  font-weight: 600;
`;

/**
 * Exports a default object with the form elements, if anything is updated in
 * junto-ui, we can only change it here and it will reflect the whole project.
 */
export default {
  Form,
  FormRow,
  TextInput,
  Button
};
