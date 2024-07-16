import React, {useEffect, useMemo, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {AnimatedFAB, Headline} from 'react-native-paper';
import {GetData, InsertData} from '../../storage/cache';

export default function BaseCode({route, Component}) {
  useEffect(() => {
    checkStar(id, setIsStar);
  }, [id, setIsStar]);

  const {id, title} = route.params;
  const [isStar, setIsStar] = useState(false);
  const fabIcon = useMemo(() => (isStar ? 'star' : 'star-outline'), [isStar]);

  const checkStar = (_id, _setIsStar, _setStarTitle) => {
    GetData('star-' + _id).then(({data, ok}) => {
      if (ok) {
        if (data === '1') {
          _setIsStar(true);
        } else {
          _setIsStar(false);
        }
      }
    });
  };
  const starToggle = () => {
    const newValue = isStar ? '0' : '1';
    InsertData('star-' + id, newValue).then(() => {
      setIsStar(!isStar);
    });
  };

  return (
    <ScrollView>
      <View className="p-2 pb-0">
        <Headline className="p-2 pb-0">{title}</Headline>
      </View>
      <View>
        <Component />
      </View>
      <AnimatedFAB
        style={styles.fab}
        icon={fabIcon}
        label={'Label'}
        onPress={starToggle}
        animateFrom={'right'}
        iconMode={'static'}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fab: {
    bottom: 10,
    right: 10,
    position: 'absolute',
  },
});
