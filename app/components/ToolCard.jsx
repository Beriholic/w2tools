import {View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';

export default function ToolCard(props) {
  return (
    <View className="flex-col p-12 mb-10  bg-light_secondaryContainer dark:bg-dark_secondaryContainer  rounded-2xl">
      <Text className="text-light_onSecondaryContainer dark:text-dark_onSecondaryContainer">
        {props.name}
      </Text>
    </View>
  );
}
