import React from 'react';

import Input from '~/components/Form/Input';
import InfoForm from '~/components/Form/InfoForm';

import { Container } from './styles';

interface Acoes {
  id: number;
  nome: string;
  percentual: number;
}

interface Props {
  acao: Acoes;
  total: number;
}

const RescueFormItem: React.FC<Props> = ({ acao, total }) => {
  const formattedValue = (
    Math.round(acao.percentual * total) / 100
  ).toLocaleString('pt-br', { minimumFractionDigits: 2 });

  return (
    <Container>
      <InfoForm title="Ação" desc={acao.nome} />
      <InfoForm title="Saldo acumulado" desc={formattedValue} />
      <Input
        name={acao.nome}
        placeholder="Valor a resgatar"
        keyboardType="numeric"
        total={formattedValue}
        acao={acao}
      />
    </Container>
  );
};

export default RescueFormItem;
