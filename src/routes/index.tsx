import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '~/styles/colors';

import InvestmentList from '~/page/InvestmentList';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blue,
          borderBottomColor: colors.yellow,
          borderBottomWidth: 3,
        },
        cardStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen
        name="InvestmentList"
        component={InvestmentList}
        options={{ title: 'Resgate' }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
