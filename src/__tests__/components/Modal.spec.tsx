import React from 'react';
import { render } from '@testing-library/react-native';

import Modal from '~/components/Modal';

describe('Modal component', () => {
  it('should render Modal', () => {
    const { getByTestId } = render(<Modal visible handleModal={jest.fn()} />);

    expect(getByTestId('modal-test')).toBeTruthy();
  });
});
