import React from 'react';

import { Container, ContainerTitle, Title, SubTitle, Value } from './styles';

export interface Item {
  nome: string;
  objetivo: string;
  saldoTotalDisponivel: number;
}

interface Props {
  dataItem: Item;
}

const Item: React.FC<Props> = ({ dataItem }) => {
  return (
    <Container>
      <ContainerTitle>
        <Title>{dataItem.nome}</Title>
        <SubTitle>{dataItem.objetivo}</SubTitle>
      </ContainerTitle>

      <Value>
        {dataItem.saldoTotalDisponivel.toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        })}
      </Value>
    </Container>
  );
};

export default Item;
