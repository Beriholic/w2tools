import {Base64} from 'js-base64';
import React, {useEffect, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {Button, Menu, Surface, Switch, Text} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import {GetData, InsertData} from '../storage/cache';

export default function Base64EDcode({route}) {
  useEffect(() => {
    checkStar(id, setIsStar, setStarTitle);
  }, [id, setIsStar, setStarTitle]);

  const {id, title} = route.params;

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isUrlSafe, setIsUrlSafe] = useState(false);

  const urlSafeModeToggle = () => {
    setIsUrlSafe(!isUrlSafe);
  };

  const encode = () => {
    setResult(Base64.encode(input, isUrlSafe));
  };
  const decode = () => {
    setResult(Base64.decode(input));
  };
  const copy2Clip = () => {
    Clipboard.setString(result);
  };
  const reset = () => {
    setInput('');
    setResult('');
  };

  const [menuVisible, setMenuVisible] = React.useState(false);

  const openMenu = () => setMenuVisible(true);

  const closeMenu = () => setMenuVisible(false);

  const [isStar, setIsStar] = useState(false);
  const [starTitle, setStarTitle] = useState('收藏');

  const checkStar = (_id, _setIsStar, _setStarTitle) => {
    GetData('star-' + _id).then(({data, ok}) => {
      if (ok) {
        if (data === '1') {
          _setIsStar(true);
          _setStarTitle('取消收藏');
        } else {
          _setIsStar(false);
          _setStarTitle('收藏');
        }
      }
    });
  };
  const starToggle = () => {
    const newValue = isStar ? '0' : '1';
    const newTitle = isStar ? '收藏' : '取消收藏';
    InsertData('star-' + id, newValue).then(() => {
      setIsStar(!isStar);
      setStarTitle(newTitle);
    });
  };

  return (
    <View>
      <View className="flex flex-row justify-between pl-2 pr-2 mt-2">
        <Menu
          style={styles.Menu}
          visible={menuVisible}
          onDismiss={closeMenu}
          anchor={
            <Pressable onPress={openMenu}>
              <Text variant="headlineSmall">{title}</Text>
            </Pressable>
          }>
          <Menu.Item onPress={starToggle} title={starTitle} />
        </Menu>
        <View className="flex flex-row items-center">
          <Text className="mr-2">URL-Safe</Text>
          <Switch value={isUrlSafe} onChange={urlSafeModeToggle} />
        </View>
      </View>
      <Surface style={styles.Surface}>
        <TextInput
          className="m-2"
          multiline={true}
          value={input}
          onChangeText={text => setInput(text)}
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
  Menu: {
    marginTop: 70,
  },
});
