import React, { useRef, useCallback, useEffect, useState } from 'react';

import { FormHandles } from '@unform/core';
import { useRoute, useNavigation } from '@react-navigation/native';

import { useInvestment } from '~/hooks/investment';

import Title from '~/components/Title';
import Modal from '~/components/Modal';

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
  const [visible, setVisible] = useState(false);
  const { setActions, total } = useInvestment();

  const { params } = useRoute();
  const { goBack } = useNavigation();
  const { nome, saldoTotalDisponivel, acoes } = params as RouteParams;

  useEffect(() => {
    setActions(acoes);
  }, [setActions, acoes]);

  const handleForm = useCallback(() => {
    if (total > 0 && total < saldoTotalDisponivel) {
      setVisible(true);
    }
  }, [total, saldoTotalDisponivel]);

  const handleModal = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <ScrollView>
        <Modal handleModal={handleModal} visible={visible} />
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

          <InfoForm title="Valor total a resgatar" desc={total} />

          <Button
            disabled={!(total > 0 && total < saldoTotalDisponivel)}
            onPress={() => formRef.current?.submitForm()}
          >
            <TextButton>CONFIRMAR RESGATE</TextButton>
          </Button>
        </Form>
      </ScrollView>
    </Container>
  );
};

export default PersonalizedRescue;
