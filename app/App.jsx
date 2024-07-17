import React, {useEffect, useState} from 'react';
import {Appearance, StatusBar, View} from 'react-native';
import {getNavTheme, getTheme} from './theme/theme.js';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomNavigationBar from './components/BottomNavigationBar.jsx';
import ToolsStack from './stack/ToolsStack.jsx';
import StarStack from './stack/StarStack.jsx';

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    setTheme(getTheme());
    setNavTheme(getNavTheme());
  }, []);
  let [theme, setTheme] = useState(getTheme());
  let [navTheme, setNavTheme] = useState();

  Appearance.addChangeListener(() => {
    setTheme(getTheme());
    setNavTheme(getNavTheme());
  });

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={navTheme}>
        <View>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle={
              Appearance.getColorScheme() === 'dark'
                ? 'light-content'
                : 'dark-content'
            }
          />
        </View>
        <Tab.Navigator
          tabBar={({navigation, state, descriptors, insets}) =>
            BottomNavigationBar(navigation, state, descriptors, insets)
          }>
          <Tab.Screen
            name="工具"
            component={ToolsStack}
            options={{
              tabBarLabel: '工具',
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({color, size}) => {
                return <Icon name="tools" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="收藏"
            component={StarStack}
            options={{
              tabBarLabel: '收藏',
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({color, size}) => {
                return (
                  <Icon name="star-four-points" size={size} color={color} />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
