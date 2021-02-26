import React from 'react';
import PropTypes from 'prop-types';

import { EmptyTab, Button, EmptyText, Icon } from './styles';

const EmptyState = ({ text, actionLabel, action }) => (
  <EmptyTab>
    <Icon />
    <EmptyText>{text}</EmptyText>
    <Button variant="primary" size="medium" onClick={action}>
      {actionLabel}
    </Button>
  </EmptyTab>
);

EmptyState.propTypes = {
  text: PropTypes.string,
  actionLabel: PropTypes.string,
  action: PropTypes.func.isRequired
};

export default EmptyState;
