import React from 'react';
import { render, screen } from '../../../../config/tests';
import { fireEvent } from '@testing-library/react';
import { AccountStatementAPI } from '@monorepo-nx/services/api';
import Extract from '.';

const MOCK_REPORT_SUCCESS = {
  status: 200,
  data: 'PDF_MOCK'
};

describe('Extract', () => {
  beforeAll(() => {
    jest
      .spyOn(AccountStatementAPI, 'getReport')
      .mockImplementation(async () => Promise.resolve(MOCK_REPORT_SUCCESS));
  });

  it('Should render without error', () => {
    render(<Extract />);
  });

  it('should not call api if radio is not selected', () => {
    const { getByTestId } = render(<Extract />);
    getByTestId('extract-submit-button').click();

    expect(AccountStatementAPI.getReport).toHaveBeenCalledTimes(0);
  });

  it('should clear all fields when change radio', () => {
    const { getByTestId } = render(<Extract />);

    fireEvent.change(screen.getByTestId('initialDate-input'), {
      target: { value: '24/09/2020' }
    });
    fireEvent.change(screen.getByTestId('finalDate-input'), {
      target: { value: '25/09/2020' }
    });

    expect(getByTestId('initialDate-input').value).toBe('24/09/2020');
    expect(getByTestId('finalDate-input').value).toBe('25/09/2020');

    getByTestId('payment-radio').click();
    expect(getByTestId('initialDate-input').value).toBe('');
    expect(getByTestId('finalDate-input').value).toBe('');
  });

  it('should render switch disregardCanceled when radio is production', () => {
    const { getByTestId } = render(<Extract />);

    getByTestId('production-radio').click();
    const switchComponent = getByTestId('switch-disregard-canceled');
    expect(switchComponent).toBeInTheDocument();

    getByTestId('accumulation-radio').click();
    expect(switchComponent).not.toBeInTheDocument();
  });

  it('should render switch disregardCanceled when radio is not production', () => {
    const { getByTestId, queryAllByTestId } = render(<Extract />);
    getByTestId('accumulation-radio').click();
    const switchComponent = queryAllByTestId('switch-disregard-canceled');

    expect(switchComponent).toHaveLength(0);
  });

  it('should show snackbar when validation fails', () => {
    const { getByTestId, getByText } = render(<Extract />);
    getByTestId('extract-submit-button').click();

    expect(getByText('extract.toast.requiredFields')).toBeInTheDocument();
  });

  it('should change switch value when clicked', () => {
    const { getByTestId } = render(<Extract />);

    getByTestId('production-radio').click();
    getByTestId('switch-disregard-canceled').click();

    expect(getByTestId('switch-disregard-canceled').value).toBe('on');
  });

  it('should show snackbar when final date is invalid', () => {
    const { getByTestId } = render(<Extract />);

    getByTestId('payment-radio').click();
    fireEvent.change(screen.getByTestId('initialDate-input'), {
      target: { value: '24/09/2020' }
    });
    fireEvent.change(screen.getByTestId('finalDate-input'), {
      target: { value: 'Invalid Date' }
    });
    getByTestId('extract-submit-button').click();

    expect(getByTestId('extract-snackbar')).toBeInTheDocument();
  });

  it('should call api when all fields are filled', () => {
    const { getByTestId } = render(<Extract />);

    getByTestId('production-radio').click();
    fireEvent.change(screen.getByTestId('initialDate-input'), {
      target: { value: '24/09/2020' }
    });
    fireEvent.change(screen.getByTestId('finalDate-input'), {
      target: { value: '25/09/2020' }
    });
    getByTestId('extract-submit-button').click();

    expect(AccountStatementAPI.getReport).toHaveBeenCalledTimes(1);
  });
});
