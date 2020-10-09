import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import screenone from '../screens/screenone'; 
import screentwo from '../screens/screentwo';
import screenthree from '../screens/screenthree';
import screenfour from '../screens/screenfour';

const Stack = createStackNavigator();

function StackNav() {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="screenone">
        <Stack.Screen name="screenone" component={screenone} />
        <Stack.Screen name="screentwo" component={screentwo} />
        <Stack.Screen name="screenthree" component={screenthree} />
        <Stack.Screen name="screenfour" component={screenfour} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default StackNav;
