/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

function renderAllTheProviders(
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    ...renderOptions
  } = {}
) {
  const AllTheProviders = ({ children }) => {
    return <Router history={history}>{children}</Router>;
  };
  return {
    ...render(ui, { wrapper: AllTheProviders, ...renderOptions }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}
// re-export everything
export * from '@testing-library/react';

// override render method
export { renderAllTheProviders as render };
