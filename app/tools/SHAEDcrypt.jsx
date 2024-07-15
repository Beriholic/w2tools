import React, {useState} from 'react';
import BaseCode from './base/BaseCode';
import {Button, SegmentedButtons, Surface, Text} from 'react-native-paper';
import {ScrollView, StyleSheet, View, TextInput} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

export default function SHAEncrypt({route}) {
  return <BaseCode route={route} Component={Comp} />;
}
function Comp() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const CryptoJS = require('crypto-js');

  const [shaMode, setShaMode] = useState('SHA1');

  const encrypt = () => {
    switch (shaMode) {
      case 'SHA1':
        setResult(CryptoJS.SHA1(input).toString());
        break;
      case 'SHA256':
        setResult(CryptoJS.SHA256(input).toString());
        break;
      case 'SHA512':
        setResult(CryptoJS.SHA512(input).toString());
        break;
      case 'SHA3':
        setResult(CryptoJS.SHA3(input).toString());
        break;
      default:
        break;
    }
  };

  const copy2Clip = () => {
    if (result.length > 0) {
      Clipboard.setString(result);
    }
  };
  const reset = () => {
    setInput('');
    setResult('');
  };

  return (
    <View>
      <Surface style={styles.Surface}>
        <TextInput
          className="m-2"
          multiline={true}
          value={input}
          onChangeText={setInput}
          placeholder="加密的内容"
        />
      </Surface>
      <SegmentedButtons
        className="pl-2 pr-2 pt-4 pb-2"
        value={shaMode}
        onValueChange={setShaMode}
        buttons={[
          {
            value: 'SHA1',
            label: 'SHA1',
          },
          {
            value: 'SHA256',
            label: 'SHA256',
          },
          {
            value: 'SHA512',
            label: 'SHA512',
          },
          {
            value: 'SHA3',
            label: 'SHA3',
          },
        ]}
      />
      <View className="flex flex-row justify-around m-2">
        <Button mode="contained" onPress={encrypt}>
          加密
        </Button>
        <Button mode="contained" onPress={copy2Clip}>
          复制
        </Button>
        <Button mode="contained" onPress={reset}>
          重置
        </Button>
      </View>
      <Surface style={styles.Surface}>
        <ScrollView>
          <Text className="m-2">{result}</Text>
        </ScrollView>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  Surface: {
    minHeight: 250,
    maxHeight: 250,
    margin: 10,
    borderRadius: 10,
  },
});
