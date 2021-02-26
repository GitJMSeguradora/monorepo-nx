import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getUserProfile, withAuthentication } from '@monorepo-nx/services/auth';
import { NavigationMenu } from '@monorepo-nx/components';
import { PageLoader } from 'junto-ui';
import { USER_TYPE } from '@monorepo-nx/utils';

import { Extract } from '../modules/Extract/containers';
import { Pin } from '../modules/Pin/containers';

const isBrokerUser = () => {
  const userProfile = getUserProfile();

  if (userProfile === USER_TYPE.broker) {
    return true;
  }

  window.location.href = process.env.NX_REACT_APP_PLATAFORMA_PROCESSOS;
  return false;
};

const Routes = ({ isAuthenticated }) =>
  isAuthenticated && isBrokerUser() ? (
    <Router>
      <NavigationMenu activeId="extrato-corretor" />
      <Switch>
        <Route path="/" exact component={Extract} />
        <Route path="/pin" exact component={Pin} />
      </Switch>
    </Router>
  ) : (
    <PageLoader style={{ zIndex: 1100 }} />
  );

Routes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const RoutesWithAuth = withAuthentication(
  Routes,
  window.location.origin,
  process.env.NX_REACT_APP_PLATAFORMA_LOGIN
);

export default RoutesWithAuth;
