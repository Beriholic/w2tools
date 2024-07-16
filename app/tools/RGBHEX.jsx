
import {Base64} from 'js-base64';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {Button, SegmentedButtons, Surface, Text} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import BaseCode from './base/BaseCode';
export default function RGBHEX({route}) {
  return <BaseCode route={route} Component={Comp} />;
}

function Comp() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const toSwitch = () => {
    if(input.includes('#')){
        const hex=input.trim()
        if(hex.length!=7){
            return
        }
        const r=parseInt(hex.slice(1,3),16)
        const g=parseInt(hex.slice(3,5),16)
        const b=parseInt(hex.slice(5,7),16)
        setResult(r+','+g+','+b)
    }else{
        const colors=input.trim().split(',')
        if(colors.length!=3){
            return
        }
        const r=parseInt(colors[0])
        const g=parseInt(colors[1])
        const b=parseInt(colors[2])
        if(r<0||r>255||g<0||g>255||b<0||b>255){
            return
        }
        const hex=('#'+r.toString(16)+g.toString(16)+b.toString(16)).toUpperCase()
        setResult(hex)
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
    <ScrollView>
      <Surface style={styles.Surface}>
        <TextInput
          className="m-2"
          multiline={true}
          value={input}
          onChangeText={setInput}
          placeholder="输入 r,g,b 或者 #xxxxxx"
        />
      </Surface>
      <View className="flex flex-row justify-around m-2">
        <Button mode="contained" onPress={toSwitch}>
            转换
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
