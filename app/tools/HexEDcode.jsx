import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {Button, Surface, Text} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import BaseCode from './base/BaseCode';

export default function HexEDcode({route}) {
  return <BaseCode route={route} Component={Comp} />;
}

function Comp() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const encode = () => {
    const tmp = [];
    for (let i = 0; i < input.length; i++) {
      const hex = input[i].charCodeAt().toString(16).padStart(4, 0);
      tmp.push(hex);
    }
    setResult(tmp.join(''));
  };
  const decode = () => {
    const tmp = [];
    for (let i = 0; i < input.length; i += 4) {
      tmp.push(String.fromCharCode(Number.parseInt(input.slice(i, i + 4), 16)));
    }
    setResult(tmp.join(''));
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
          placeholder="编码/解码的内容"
        />
      </Surface>
      <View className="flex flex-row justify-around m-2">
        <Button mode="contained" onPress={encode}>
          编码
        </Button>
        <Button mode="contained" onPress={decode}>
          解码
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
