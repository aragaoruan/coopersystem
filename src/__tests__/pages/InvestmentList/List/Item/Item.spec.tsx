import React from 'react';
import { render } from '@testing-library/react-native';

import Item from '~/page/InvestmentList/List/Item';

describe('component Item', () => {
  it('should render item', () => {
    const { getByText } = render(
      <Item
        dataItem={{
          nome: 'nome',
          objetivo: 'objetivo',
          saldoTotalDisponivel: 1000,
        }}
      />,
    );

    expect(getByText('nome')).toBeTruthy();
    expect(getByText('objetivo')).toBeTruthy();
  });
});
