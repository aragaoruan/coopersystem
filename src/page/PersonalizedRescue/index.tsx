import React from 'react';

import Title from '~/components/Title';
import InfoForm from '~/components/Form/InfoForm';

import { Container } from './styles';

const PersonalizedRescue: React.FC = () => {
  return (
    <Container>
      <Title leftTitle="dados do investimento" />
      <InfoForm title="Nome" desc="ewfweg" />
      <InfoForm title="Saldo total disponível" desc="ewfweg" />
      <Title leftTitle="Resgate do seu jeito" />

      <InfoForm title="Valor total a resgatar" desc="ewfweg" />
    </Container>
  );
};

export default PersonalizedRescue;
