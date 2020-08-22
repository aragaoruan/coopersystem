import React from 'react';

import { Container, Title } from './styles';

interface Props {
  leftTitle: string;
  rightTitle: string;
}

const Header: React.FC<Props> = ({ leftTitle, rightTitle }) => {
  return (
    <Container>
      <Title>{leftTitle}</Title>
      <Title>{rightTitle}</Title>
    </Container>
  );
};

export default Header;
