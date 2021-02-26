import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render, screen } from '../../../../config/tests';
import { AccountStatementAPI } from '@monorepo-nx/services/api';

import Pin from '.';

const MOCK_PIN_SUCCESS = {
  status: 200,
  data: [
    {
      type: 1,
      value: 'PIN válido.'
    }
  ]
};

const MOCK_PIN_RECOVERY_SUCCESS = {
  status: 200,
  data: {
    notifiedEmails: [
      {
        email: 'test@test.com',
        success: true
      }
    ]
  }
};

describe('Pin', () => {
  beforeAll(() => {
    jest
      .spyOn(AccountStatementAPI, 'validatePin')
      .mockImplementation(async () => Promise.resolve(MOCK_PIN_SUCCESS));
    jest
      .spyOn(AccountStatementAPI, 'recoverPin')
      .mockImplementation(async () =>
        Promise.resolve(MOCK_PIN_RECOVERY_SUCCESS)
      );
  });

  it('Should render without error', async () => {
    render(<Pin />);
  });

  it('Should validate the PIN number and save as a Cookie', async () => {
    const { getByTestId } = render(<Pin />);
    fireEvent.change(screen.getByTestId('pin-input'), {
      target: { value: '123456' }
    });
    getByTestId('pin-button-submit').click();

    expect(AccountStatementAPI.validatePin).toHaveBeenCalledTimes(1);
  });

  it('Should fail the PIN number validation', async () => {
    jest.clearAllMocks();
    jest
      .spyOn(AccountStatementAPI, 'validatePin')
      .mockImplementation(async () =>
        Promise.reject(new Error('request failed'))
      );

    const { getByTestId } = render(<Pin />);
    fireEvent.change(screen.getByTestId('pin-input'), {
      target: { value: '123456' }
    });

    getByTestId('pin-button-submit').click();

    expect(AccountStatementAPI.validatePin).toHaveBeenCalledTimes(1);
  });

  it('Should allow user to recover the PIN number', async () => {
    const { getByTestId } = render(<Pin />);
    getByTestId('pin-button-recover').click();

    expect(AccountStatementAPI.recoverPin).toHaveBeenCalledTimes(1);
  });

  it('Should fail when recovering the PIN number', async () => {
    jest.clearAllMocks();
    jest
      .spyOn(AccountStatementAPI, 'recoverPin')
      .mockImplementation(async () =>
        Promise.reject(new Error('request failed'))
      );

    const { getByTestId } = render(<Pin />);
    getByTestId('pin-button-recover').click();

    expect(AccountStatementAPI.recoverPin).toHaveBeenCalledTimes(1);
  });
});
