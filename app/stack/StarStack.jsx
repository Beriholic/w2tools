import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Base64EDcode from '../tools/Base64EDcode';
import StarScreen from '../screen/StarScreen';

const Stack = createNativeStackNavigator();

export default function StarStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={StarScreen} />
      <Stack.Screen name="Base64EDcode" component={Base64EDcode} />
    </Stack.Navigator>
  );
}
