import styled from 'styled-components/native';

import { colors, fonts } from '~/styles';

export const Container = styled.View`
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  background: ${colors.white};
  margin-top: 2px;
`;

export const ContainerTitle = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: ${fonts.big};
`;

export const SubTitle = styled.Text`
  font-size: ${fonts.regular};
  color: #848484;
`;

export const Value = styled.Text`
  font-size: ${fonts.big};
`;
