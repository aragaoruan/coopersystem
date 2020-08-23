import React from 'react';
import { render } from '@testing-library/react-native';

import RescueFormItem from '~/page/PersonalizedRescue/RescueFormItem';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('RescueFormItem component', () => {
  it('should render RescueFormItem', () => {
    const { getByTestId } = render(
      <RescueFormItem
        acao={{ id: 1, nome: 'nome', percentual: 10 }}
        total={10}
      />,
    );

    expect(getByTestId('rescue-form-item')).toBeTruthy();
  });
});
