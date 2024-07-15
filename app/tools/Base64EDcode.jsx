import {Base64} from 'js-base64';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {Button, SegmentedButtons, Surface, Text} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import BaseCode from './base/BaseCode';
export default function Base64EDcode({route}) {
  return <BaseCode route={route} Component={Comp} />;
}

function Comp() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isUrlSafe, setIsUrlSafe] = useState(false);

  const encode = () => {
    setResult(Base64.encode(input, isUrlSafe));
  };
  const decode = () => {
    setResult(Base64.decode(input));
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
    <ScrollView>
      <SegmentedButtons
        className="pl-2 pr-2 pt-4 pb-2"
        value={isUrlSafe}
        onValueChange={setIsUrlSafe}
        buttons={[
          {
            value: false,
            label: 'URL不安全',
          },
          {
            value: 'true',
            label: 'URL安全',
          },
        ]}
      />
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
    </ScrollView>
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
