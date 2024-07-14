import React from 'react';
import CategoryCard from '../components/CategoryCard';
import {View} from 'react-native';
import {ToolCategories} from '../config/ToolsData';

export default function CategoriesScreen() {
  return (
    <View className="pt-8 flex-row flex-wrap justify-around">
      {ToolCategories.map((cat, index) => {
        return <CategoryCard key={index} name={cat.name} />;
      })}
    </View>
  );
}
