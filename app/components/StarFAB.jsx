import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import {AnimatedFAB} from 'react-native-paper';
import {GetData, InsertData} from '../storage/cache';

export default function StarFAB({id}) {
  useEffect(() => {
    setIsStar(checkStar(id));
  }, [id]);

  const [isStar, setIsStar] = useState(false);
  const iconName = useMemo(() => (isStar ? 'star' : 'star-outline'), [isStar]);

  const checkStar = _id => {
    GetData('star-' + _id).then(({data, ok}) => {
      return ok && data === '1';
    });
  };
  const starToggle = () => {
    const newValue = isStar ? '0' : '1';
    InsertData('star-' + id, newValue).then(() => {
      setIsStar(!isStar);
    });
  };

  return (
    <AnimatedFAB
      style={styles.fab}
      icon={iconName}
      label={'Label'}
      onPress={starToggle}
      animateFrom={'right'}
      iconMode={'static'}
    />
  );
}

const styles = StyleSheet.create({
  fab: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});
