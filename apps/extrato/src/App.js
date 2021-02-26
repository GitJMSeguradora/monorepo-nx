import React from 'react';
import Routes from './routes';
import { RemoteConfigProvider } from './context/RemoteConfigContext';

import { Main } from './AppStyles';

const App = () => {
  return (
    <RemoteConfigProvider>
      <Main>
        <Routes />
      </Main>
    </RemoteConfigProvider>
  );
};

export default App;
