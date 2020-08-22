import styled from 'styled-components/native';
import { fonts } from '~/styles';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const TextTitle = styled.Text`
  font-size: ${fonts.big};
  text-transform: uppercase;
  font-weight: bold;
  color: #848484;
`;
