import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {InsertData, GetData} from '../storage/cache';

export default function TestPage() {
  const key = 'test_key';
  const value = 'test_value';
  const [readValue, setReadValue] = useState('waiting');

  const read = () => {
    GetData(key).then(({data, ok}) => {
      setReadValue(data);
      console.log(data, ok);
    });
  };
  const set = () => {
    InsertData(key, value).then(ok => {
      console.log(ok);
    });
  };

  return (
    <View>
      <Text className="text-center m-2">{readValue}</Text>
      <Button className="m-2" mode="contained" onPress={set}>
        写入
      </Button>
      <Button className="m-2" mode="contained" onPress={read}>
        读取
      </Button>
    </View>
  );
}
