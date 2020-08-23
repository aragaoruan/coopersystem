import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '~/styles';

import InvestmentList from '~/page/InvestmentList';
import PersonalizedRescue from '~/page/PersonalizedRescue';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      // initialRouteName="PersonalizedRescue"
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
        options={{ title: 'Investimentos' }}
      />

      <Stack.Screen
        name="PersonalizedRescue"
        component={PersonalizedRescue}
        options={{ title: 'Resgate' }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
