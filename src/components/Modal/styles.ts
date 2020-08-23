import styled from 'styled-components/native';
import { lighten } from 'polished';
import { colors, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  background: ${colors.white};
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: ${fonts.big};
  font-weight: bold;
  color: ${colors.blue};
`;

export const Description = styled.Text`
  font-size: ${fonts.regular};
  margin-top: 10px;
  color: ${lighten(0.3, colors.blue)};
  padding-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.yellow};
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
`;

export const TextButton = styled.Text`
  text-transform: uppercase;
  color: ${colors.blue};
  font-size: ${fonts.big};
  font-weight: bold;
`;
