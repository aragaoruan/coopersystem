import React from 'react';
import { ActivityIndicator } from 'react-native';

import { colors } from '~/styles';

import { Container } from './styles';

const Loader: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator testID="loader" size="large" color={colors.blue} />
    </Container>
  );
};

export default Loader;
