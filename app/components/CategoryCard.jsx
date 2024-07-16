import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text, useTheme} from 'react-native-paper';

export default function CategoryCard({name}) {
  const theme = useTheme();
  const styles = StyleSheet.create({
    view: {
      backgroundColor: theme.colors.secondaryContainer,
    },
    text: {
      fontSize: 16,
    },
  });

  return (
    <View
      style={styles.view}
      className="flex-col p-12 mb-10 rounded-2xl shadow-xl shadow-black">
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}
