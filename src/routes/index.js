import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  MainScreen,
  AccountOverviewScreen,
  CreateTransactionScreen,
} from '../pages';
import {theme} from '../theme/globalStyles';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerTransparent: true, headerTitle: null}}
        />
        <Stack.Screen
          name="AccountOverview"
          component={AccountOverviewScreen}
          options={{
            headerTransparent: true,
            headerTitle: null,
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="CreateTransaction"
          component={CreateTransactionScreen}
          options={{
            headerTransparent: true,
            headerTintColor: theme.color.dark,
            headerBackTitleVisible: false,
            headerTitleStyle: {
              fontFamily: theme.fontFamily.regular,
            },
            headerTitle: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
