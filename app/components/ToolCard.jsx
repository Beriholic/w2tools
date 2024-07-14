import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

export default function ToolCard({title, navigation, router, id}) {
  const goto = () => {
    if (router !== undefined) {
      navigation.push(router, {title: title, id: id});
    }
  };
  const theme = useTheme();

  const styles = StyleSheet.create({
    text: {
      fontSize: 16,
    },
    view: {
      backgroundColor: theme.colors.secondaryContainer,
    },
  });
  return (
    <View style={styles.view} className="p-4 m-2 ml-3 mr-3 rounded-2xl ">
      <Pressable onPress={goto}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}
