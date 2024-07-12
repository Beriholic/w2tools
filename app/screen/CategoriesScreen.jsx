import React from 'react';
import ToolCard from '../components/ToolCard';
import ToolCategories from '../config/ToolsData';
import {View} from 'react-native';

export default function CategoriesScreen() {
  return (
    <View className="pt-8 flex-row flex-wrap justify-around bg-light_background dark:bg-dark_background">
      {ToolCategories.map((cat, index) => {
        return <ToolCard key={index} name={cat.name} />;
      })}
    </View>
  );
}
