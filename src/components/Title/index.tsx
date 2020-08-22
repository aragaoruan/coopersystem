import React from 'react';

import { Container, TextTitle } from './styles';

interface Props {
  leftTitle: string;
  rightTitle?: string;
}

const Title: React.FC<Props> = ({ leftTitle, rightTitle }) => {
  return (
    <Container>
      <TextTitle>{leftTitle}</TextTitle>
      {rightTitle && <TextTitle>{rightTitle}</TextTitle>}
    </Container>
  );
};

export default Title;
