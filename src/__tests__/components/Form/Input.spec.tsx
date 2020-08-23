import React from 'react';
import { render } from '@testing-library/react-native';

import Input from '~/components/Form/Input';

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

describe('InfoForm component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input
        name="name"
        total="0"
        acao={{
          id: 1,
          nome: 'nome',
          percentual: 10,
        }}
        placeholder="place"
      />,
    );

    expect(getByPlaceholderText('place')).toBeTruthy();
  });
});
