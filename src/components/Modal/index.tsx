import React from 'react';
import ModalComponent from 'react-native-modal';

import {
  Container,
  Title,
  Content,
  Description,
  Button,
  TextButton,
} from './styles';

interface Props {
  visible: boolean;
  handleModal: any;
}

const Modal: React.FC<Props> = ({ visible, handleModal }) => {
  return (
    <Container>
      <ModalComponent isVisible={visible}>
        <Content>
          <Title>RESGATE EFETUADO</Title>
          <Description>
            O valor solicitado está em sua conta em até 5 dias úteis!
          </Description>
        </Content>
        <Button onPress={handleModal}>
          <TextButton>NOVO RESGATE</TextButton>
        </Button>
      </ModalComponent>
    </Container>
  );
};

export default Modal;
