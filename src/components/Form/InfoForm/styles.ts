import styled from 'styled-components/native';
import { fonts } from '~/styles';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 10px;
  margin-top: 2px;
`;

export const Title = styled.Text`
  font-size: ${fonts.big};
  font-weight: bold;
`;

export const Desc = styled.Text`
  font-size: ${fonts.big};
`;
