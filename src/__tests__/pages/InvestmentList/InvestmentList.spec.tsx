import React from 'react';
import { render } from '@testing-library/react-native';

import InvestmentList from '~/page/InvestmentList';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('page InvestmentList', () => {
  it('should render InvestmentList', () => {
    const { getByTestId } = render(<InvestmentList />);

    expect(getByTestId('flat-list')).toBeTruthy();
  });
});
