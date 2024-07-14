import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {Tools} from '../config/ToolsData';
import {GetData} from '../storage/cache';
import ToolCard from '../components/ToolCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AnimatedFAB} from 'react-native-paper';

export default function StarScreen({navigation}) {
  useEffect(() => {
    getStarList(setStarList);
  }, [setStarList]);

  const [isExtended, setIsExtended] = React.useState(true);

  const onScroll = ({nativeEvent}) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  const [starList, setStarList] = useState([]);
  const getStarList = async _setStarList => {
    const promises = Tools.map(tool => {
      return GetData('star-' + tool.id).then(({data, ok}) => {
        console.log('star-' + tool.id, data, ok);
        if (ok && data === '1') {
          return tool;
        } else {
          return undefined;
        }
      });
    });
    var list = await Promise.all(promises);
    var list = list.reduce((acc, cur) => {
      if (cur !== undefined) {
        acc.push(cur);
      }
      return acc;
    }, []);
    setStarList(list);
  };

  return (
    <SafeAreaView>
      <FlatList
        style={styles.flatList}
        data={starList}
        renderItem={({item}) => (
          <ToolCard
            navigation={navigation}
            title={item.title}
            router={item.router}
            id={item.id}
          />
        )}
        keyExtractor={item => item.id}
        onScroll={onScroll}
      />
      <AnimatedFAB
        icon="magnify"
        style={styles.fab}
        extended={isExtended}
        label="搜索"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fab: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
  flatList: {
    minHeight: 630,
  },
});
