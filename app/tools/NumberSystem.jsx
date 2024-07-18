import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {Button, SegmentedButtons, Surface, Text} from 'react-native-paper';
import BaseCode from './base/BaseCode';
export default function NumberSystem({route}) {
  return <BaseCode route={route} Component={Comp} />;
}

function Comp() {
  const [input, setInput] = useState('');
  const [inputType, setInputType] = useState('10');

  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');
  const [octal, setOctal] = useState('');
  const [hex, setHex] = useState('');

  const reset = () => {
    setInput('');
    setDecimal('');
    setBinary('');
    setOctal('');
    setHex('');
  };

  const toSwitch = text => {
    if (text.length === 0) {
      reset();
      return;
    }

    setInput(text);
    if (inputType === '2') {
      setBinary(text);
      setDecimal(parseInt(text, 2).toString(10));
      setOctal(parseInt(text, 2).toString(8));
      setHex(parseInt(text, 2).toString(16));
    } else if (inputType === '8') {
      setOctal(text);
      setDecimal(parseInt(text, 8).toString(10));
      setBinary(parseInt(text, 8).toString(2));
      setHex(parseInt(text, 8).toString(16));
    } else if (inputType === '10') {
      setDecimal(text);
      setBinary(parseInt(text, 10).toString(2));
      setOctal(parseInt(text, 10).toString(8));
      setHex(parseInt(text, 10).toString(16));
    } else if (inputType === '16') {
      setHex(text);
      setDecimal(parseInt(text, 16).toString(10));
      setBinary(parseInt(text, 16).toString(2));
      setOctal(parseInt(text, 16).toString(8));
    }
  };

  return (
    <ScrollView>
      <SegmentedButtons
        className="pl-2 pr-2 pt-4 pb-2"
        value={inputType}
        onValueChange={setInputType}
        buttons={[
          {
            value: '2',
            label: '二进制',
          },
          {
            value: '8',
            label: '八进制',
          },
          {
            value: '10',
            label: '十进制',
          },
          {
            value: '16',
            label: '十六进制',
          },
        ]}
      />
      <View className="">
        <View className="flex flex-row items-center justify-between pl-3 pr-3">
          <Text className="text-xl">原始数据</Text>
          <Button mode="contained-tonal">重置</Button>
        </View>
        <Surface style={styles.Surface}>
          <TextInput
            className="m-2 p-2"
            multiline={true}
            value={input}
            onChangeText={text => toSwitch(text)}
          />
        </Surface>
      </View>
      <View>
        <View className="flex flex-row items-center justify-between pl-3 pr-3">
          <Text className="text-xl">二进制</Text>
          <Button mode="contained-tonal">复制</Button>
        </View>
        <Surface style={styles.Surface}>
          <Text className="p-4">{binary}</Text>
        </Surface>
      </View>

      <View>
        <View className="flex flex-row items-center justify-between pl-3 pr-3">
          <Text className="text-xl">八进制</Text>
          <Button mode="contained-tonal">复制</Button>
        </View>
        <Surface style={styles.Surface}>
          <Text className="p-4">{octal}</Text>
        </Surface>
      </View>

      <View>
        <View className="flex flex-row items-center justify-between pl-3 pr-3">
          <Text className="text-xl">十进制</Text>
          <Button mode="contained-tonal">复制</Button>
        </View>
        <Surface style={styles.Surface}>
          <Text className="p-4">{decimal}</Text>
        </Surface>
      </View>

      <View>
        <View className="flex flex-row items-center justify-between pl-3 pr-3">
          <Text className="text-xl">十六进制</Text>
          <Button mode="contained-tonal">复制</Button>
        </View>
        <Surface style={styles.Surface}>
          <Text className="p-4">{hex}</Text>
        </Surface>
      </View>
      <View className="m-8" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Surface: {
    minHeight: 50,
    maxHeight: 50,
    margin: 10,
    borderRadius: 10,
  },
});
