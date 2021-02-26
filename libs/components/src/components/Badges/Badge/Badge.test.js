import '../../../../tests/setup';

import React from 'react';
import { render } from '@testing-library/react';

// component
import Badge from './Badge';

describe('Badge component', () => {
  describe('Layout', () => {
    it('should render Lamp badge', () => {
      const { getByTestId } = render(<Badge name="Lamp" />);
      expect(getByTestId('badge-lamp')).toBeInTheDocument();
    });
    it('should render Mountain badge', () => {
      const { getByTestId } = render(<Badge name="Mountain" />);
      expect(getByTestId('badge-mountain')).toBeInTheDocument();
    });
    it('should render Plane badge', () => {
      const { getByTestId } = render(<Badge name="Plane" />);
      expect(getByTestId('badge-plane')).toBeInTheDocument();
    });
    it('should render Policy badge', () => {
      const { getByTestId } = render(<Badge name="Policy" />);
      expect(getByTestId('badge-policy')).toBeInTheDocument();
    });
    it('should render Rocket badge', () => {
      const { getByTestId } = render(<Badge name="Rocket" />);
      expect(getByTestId('badge-rocket')).toBeInTheDocument();
    });
    it('should render Trophy badge', () => {
      const { getByTestId } = render(<Badge name="Trophy" />);
      expect(getByTestId('badge-trophy')).toBeInTheDocument();
    });

    it('should not render an icon', () => {
      const { getByTestId, queryByText } = render(<Badge subtitle="subtitle of" title="badge" />);
      expect(getByTestId('badge-caption')).toBeInTheDocument();
      expect(queryByText('subtitle of')).toBeInTheDocument();
      expect(queryByText('badge')).toBeInTheDocument();
    });
  });
});
