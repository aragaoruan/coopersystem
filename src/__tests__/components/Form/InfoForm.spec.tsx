import React from 'react';
import { render } from '@testing-library/react-native';

import InfoForm from '~/components/Form/InfoForm';

describe('InfoForm component', () => {
  it('should render component infoForm', () => {
    const { getByText } = render(<InfoForm title="Title" desc="desc" />);

    expect(getByText('Title')).toBeTruthy();
    expect(getByText('desc')).toBeTruthy();
  });
});
