import React from 'react';

import { Container, Title, Desc } from './styles';

interface Props {
  title: string;
  desc: string | number;
}

const InfoForm: React.FC<Props> = ({ title, desc }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
    </Container>
  );
};

export default InfoForm;
