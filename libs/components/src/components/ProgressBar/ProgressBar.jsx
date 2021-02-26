import React from 'react';
import PropTypes from 'prop-types';
import { Label, Progress, Header, ProgressStatus, FootNote, ProgressWrapper } from './styles';
import { CircularCheckIcon } from 'junto-ui';
import { palette } from "@monorepo-nx/components";

const ProgressBar = ({
  id,
  label,
  valueMin,
  valueMax,
  valueNow,
  showCompleteIcon,
  footNote,
  ...rest
}) => {
  const renderStatus = () => {
    if (showCompleteIcon && valueNow >= 100) {
      return <CircularCheckIcon width={16} height={16} fill={palette.success} stroke={palette.success} />
    }

    return `${valueNow.toFixed()}%`
  }

  return (
    <ProgressWrapper>

      <Header {...rest}>
        <Label htmlFor={id}>{label}</Label>
        <ProgressStatus>
          {renderStatus()}
        </ProgressStatus>
      </Header>

      <Progress
        id={id}
        aria-valuemin={valueMin}
        aria-valuemax={valueMax}
        aria-valuenow={valueNow}
        max={valueMax}
        value={valueNow}
      />

      <FootNote>{footNote}</FootNote>
    </ProgressWrapper>
  );
};

ProgressBar.defaultProps = {
  valueMin: 0,
  valueMax: 100,
  valueNow: 0,
  showCompleteIcon: true,
  footNote: '',
  label: ''
};

ProgressBar.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  valueMin: PropTypes.number,
  valueMax: PropTypes.number,
  valueNow: PropTypes.number,
  showCompleteIcon: PropTypes.bool,
  footNote: PropTypes.string,
};

export default ProgressBar;
