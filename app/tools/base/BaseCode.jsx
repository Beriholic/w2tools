import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Menu, Text} from 'react-native-paper';
import {GetData, InsertData} from '../../storage/cache';

export default function BaseCode({route, Component}) {
  useEffect(() => {
    checkStar(id, setIsStar, setStarTitle);
  }, [id, setIsStar, setStarTitle]);

  const {id, title} = route.params;

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
      <View className="pl-2 pr-2 mt-2">
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
      </View>
      <View>
        <Component />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Menu: {
    marginTop: 70,
  },
});
