import styled from 'styled-components/native';

import { fonts } from '~/styles';

export const Container = styled.View`
  flex-direction: column;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  margin-top: 5px;
  padding: 10px 0;
  padding: 10px;
`;

export const Text = styled.Text`
  font-size: 18px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  margin-top: -10px;
  padding-bottom: -10px;
  border-bottom-width: 1px;
  border-bottom-color: #848484;
`;

export const Error = styled.Text`
  font-size: ${fonts.small};
  color: red;
  margin-top: -10px;
  padding: 0 30px;
`;
