import React from 'react';
import {CreateTransactionScreen} from '../../src/pages';
import {render, fireEvent} from '@testing-library/react-native';

describe('AccountOverviewScreen', () => {
  it('should be able to add new tech', () => {
    const {getByText, getByTestId} = render(<CreateTransactionScreen />);

    fireEvent.changeText(getByTestId('input'), 'Aluguel');
    fireEvent.changeText(getByTestId('currency'), 'R$');
    fireEvent.press(getByText('Salvar transação'));

    expect(getByText('Aluguel')).toBeTruthy();
    expect(getByText('input')).toHaveProp('value', '');
    expect(getByText('currency')).toHaveProp('value', '');
  });
});
