import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { useRoute } from '@react-navigation/native';
import * as Yup from 'yup';

import Title from '~/components/Title';
import InfoForm from '~/components/Form/InfoForm';

import RescueFormItem from './RescueFormItem';

import { Container, ScrollView, Form, Button, TextButton } from './styles';

interface RouteParams {
  nome: string;
  objetivo: string;
  saldoTotalDisponivel: number;
  indicadorCarencia: 'N' | 'S';
  acoes: Acoes[];
}

interface Acoes {
  id: number;
  nome: string;
  percentual: number;
}

interface Validations {
  [key: string]: any;
}

const PersonalizedRescue: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { params } = useRoute();
  const {
    nome,
    objetivo,
    saldoTotalDisponivel,
    indicadorCarencia,
    acoes,
  } = params as RouteParams;

  const handleForm = useCallback(async (data) => {}, []);

  return (
    <Container>
      <ScrollView>
        <Form ref={formRef} onSubmit={handleForm}>
          <Title leftTitle="dados do investimento" />
          <InfoForm title="Nome" desc={nome} />
          <InfoForm
            title="Saldo total disponível"
            desc={saldoTotalDisponivel}
          />
          <Title leftTitle="Resgate do seu jeito" />

          {acoes.map((acao) => (
            <RescueFormItem
              key={acao.id}
              acao={acao}
              total={saldoTotalDisponivel}
            />
          ))}

          <InfoForm title="Valor total a resgatar" desc="ewfweg" />

          <Button onPress={() => formRef.current?.submitForm()}>
            <TextButton>CONFIRMAR RESGATE</TextButton>
          </Button>
        </Form>
      </ScrollView>
    </Container>
  );
};

export default PersonalizedRescue;
