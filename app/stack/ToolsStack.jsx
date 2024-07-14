import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ToolsScreen from '../screen/ToolsScreen';
import URLEDcode from '../tools/URLEDcode';
import Base64EDcode from '../tools/Base64EDcode';

const Stack = createNativeStackNavigator();

export default function ToolsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={ToolsScreen} />
      <Stack.Screen name="Base64EDcode" component={Base64EDcode} />
      <Stack.Screen name="URLEDcode" component={URLEDcode} />
    </Stack.Navigator>
  );
}
