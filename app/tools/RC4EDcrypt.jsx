import React, {useState} from 'react';
import BaseCode from './base/BaseCode';
import {Button, Surface, Text} from 'react-native-paper';
import {ScrollView, StyleSheet, View, TextInput} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

export default function RC4EDcrypt({route}) {
  return <BaseCode route={route} Component={Comp} />;
}
function Comp() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [key, setKey] = useState('');

  const CryptoJS = require('crypto-js');

  const encrypt = () => {
    var res = CryptoJS.RC4.encrypt(input, key).toString();
    setResult(res.toString());
  };

  const decrypt = () => {
    var res = CryptoJS.RC4.decrypt(input, key).toString(CryptoJS.enc.Utf8);
    setResult(res.toString());
  };

  const copy2Clip = () => {
    if (result.length > 0) {
      Clipboard.setString(result);
    }
  };
  const reset = () => {
    setInput('');
    setResult('');
    setKey('');
  };

  return (
    <ScrollView>
      <Surface style={styles.Surface_key}>
        <TextInput placeholder="密钥" value={key} onChangeText={setKey} />
      </Surface>
      <Surface style={styles.Surface_input}>
        <TextInput
          className="m-2"
          multiline={true}
          value={input}
          onChangeText={setInput}
          placeholder="加密/解密的内容"
        />
      </Surface>
      <View className="flex flex-row justify-around m-2">
        <Button mode="contained" onPress={encrypt}>
          加密
        </Button>
        <Button mode="contained" onPress={decrypt}>
          解密
        </Button>
        <Button mode="contained" onPress={copy2Clip}>
          复制
        </Button>
        <Button mode="contained" onPress={reset}>
          重置
        </Button>
      </View>
      <Surface style={styles.Surface_result}>
        <ScrollView>
          <Text className="m-2">{result}</Text>
        </ScrollView>
      </Surface>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Surface_input: {
    minHeight: 250,
    maxHeight: 250,
    margin: 10,
    borderRadius: 10,
  },
  Surface_result: {
    minHeight: 200,
    maxHeight: 200,
    margin: 10,
    borderRadius: 10,
  },
  Surface_key: {
    minHeight: 50,
    maxHeight: 50,
    margin: 10,
    borderRadius: 10,
  },
});
