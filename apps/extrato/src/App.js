import React from 'react';
import Routes from './routes';
import { RemoteConfigProvider } from './context/RemoteConfigContext';
import { GlobalStyle } from '@monorepo-nx/components';

import { Main } from './AppStyles';

const App = () => {
  return (
    <RemoteConfigProvider>
      <Main>
        <Routes />
        <GlobalStyle />
      </Main>
    </RemoteConfigProvider>
  );
};

export default App;
