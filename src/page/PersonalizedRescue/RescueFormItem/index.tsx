import React from 'react';
import { View } from 'react-native';

import InfoForm from '~/components/Form/InfoForm';

import { Container } from './styles';

const RescueFormItem: React.FC = () => {
  return (
    <Container>
      <InfoForm title="Ação" desc="Ação" />
      <InfoForm title="Saldo acumulado" desc="Saldo" />
    </Container>
  );
};

export default RescueFormItem;
