import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ToolsScreen from '../screen/ToolsScreen';
import URLEDcode from '../tools/URLEDcode';
import Base64EDcode from '../tools/Base64EDcode';
import HexEDcode from '../tools/HexEDcode';
import PunyCodeEDcode from '../tools/PunyCodeEDCode';
import MD5Encrypt from '../tools/MD5Encrypt';
import SHA1Encrypt from '../tools/SHAEDcrypt';
import AESEDcrypt from '../tools/AESEDcrypt';
import DESEDcrypt from '../tools/DESEDcrypt';
import RC4EDcrypt from '../tools/RC4EDcrypt';
import JWTEDcrypt from '../tools/JWTEDcrypt';

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
      <Stack.Screen name="HexEDcode" component={HexEDcode} />
      <Stack.Screen name="PunyCodeEDcode" component={PunyCodeEDcode} />
      <Stack.Screen name="MD5Encrypt" component={MD5Encrypt} />
      <Stack.Screen name="SHAEncrypt" component={SHA1Encrypt} />
      <Stack.Screen name="AESEDcrypt" component={AESEDcrypt} />
      <Stack.Screen name="DESEDcrypt" component={DESEDcrypt} />
      <Stack.Screen name="RC4EDcrypt" component={RC4EDcrypt} />
      <Stack.Screen name="JWTEDcrypt" component={JWTEDcrypt} />
    </Stack.Navigator>
  );
}
