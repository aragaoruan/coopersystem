import styled from 'styled-components/native';
import { Form as Unform } from '@unform/mobile';

import { colors, fonts } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Form = styled(Unform)`
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.yellow};
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  text-transform: uppercase;
  color: ${colors.blue};
  font-size: ${fonts.big};
  font-weight: bold;
`;
