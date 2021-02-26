import styled from 'styled-components';
import { colors, RadioButton, DateInput, Switch } from 'junto-ui';

export const ExtractWrapper = styled.div`
  max-width: 650px;
  text-align: center;
  color: ${colors.slate};
`;

export const ExtractTitle = styled.h1`
  font-size: 2.6rem;
  line-height: 3.4rem;
  font-family: 'Metropolis', sans-serif;
  margin: 0 auto 1.3rem;
  text-align: left;
`;

export const ExtractSubtitle = styled.div`
  font-size: 12px;
  line-height: 20px;
  text-align: left;
`;

export const ExtractLink = styled.a`
  color: ${colors.periwinkle};
  font-size: 12px;
  letter-spacing: 0px;
  text-decoration: none;
`;

export const TitleWrapper = styled.div`
  height: 48px;
  margin-bottom: 20px;
  margin-top: 40px;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: ${({ index = 1 }) => index && `'${index}'`};
    color: ${colors.blueyGrey};
    border: solid 2px ${colors.paleGreyThree};
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 30px;
    left: -80px;
    transition: all 0.3s ease;

    ${({ active }) =>
      active &&
      `
      color:${colors.slate};
      border: solid 2px ${colors.periwinkle};
    `}
  }
`;

export const Title = styled.h2`
  color: ${({ disabled }) => (disabled ? colors.blueyGrey : colors.slate)};
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
  max-width: 573px;
`;

export const ExtractStepWrapper = styled.div`
  text-align: left;
  display: flex;
  max-width: 310px;
  pointer-events: ${({ disabled }) => disabled && 'none'};
  opacity: ${({ disabled }) => disabled && '0.4'};
  div {
    margin-right: 30px;
  }
`;

export const MarginWrapper = styled.div`
  margin-top: 30px;
`;

export const StyledRadioButton = styled(RadioButton)`
  pointer-events: ${({ disabled }) => disabled && 'none'};
  opacity: ${({ disabled }) => disabled && '0.4'};

  label {
    font-size: 16px;
    white-space: nowrap;
  }
`;

export const StyledDateInput = styled(DateInput)``;

export const ExtractPageContainer = styled.div`
  height: 100vh;
  max-width: 60vw;
  margin: 50px auto 0;
  ${({ theme }) => ({ ...theme.page })}
`;

export const ExtractSwitch = styled(Switch)`
  label:nth-child(2) {
    font-size: 20px;
    margin-right: auto;
    margin-left: 0px;
  }
`;
