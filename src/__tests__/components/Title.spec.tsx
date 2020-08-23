import React from 'react';
import { render } from '@testing-library/react-native';

import Title from '~/components/Title';

describe('Title component', () => {
  it('should render Title', () => {
    const { getByText } = render(<Title leftTitle="left" />);

    expect(getByText('left')).toBeTruthy();
  });

  it('should render left title and right title', () => {
    const { getByText } = render(<Title leftTitle="left" rightTitle="right" />);

    expect(getByText('left')).toBeTruthy();
    expect(getByText('right')).toBeTruthy();
  });
});
