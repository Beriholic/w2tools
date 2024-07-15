import React, {useState} from 'react';
import BaseCode from './base/BaseCode';
import {Button, Surface, Text} from 'react-native-paper';
import {ScrollView, StyleSheet, View, TextInput} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

export default function MD5Encrypt({route}) {
  return <BaseCode route={route} Component={Comp} />;
}
function Comp() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const CryptoJS = require('crypto-js');

  const encrypt = () => {
    var hash = CryptoJS.MD5(input);
    setResult(hash.toString());
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
