import React, {useEffect, useState} from 'react';
import {Appearance, StatusBar, View} from 'react-native';
import {getNavTheme, getTheme} from './theme/theme.js';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CategoriesScreen from './screen/CategoriesScreen.jsx';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomNavigationBar from './components/BottomNavigationBar.jsx';
import SettingsSceern from './screen/SettingsScreen.jsx';
import ToolsStack from './stack/ToolsStack.jsx';
import TestPage from './tools/TestPage.jsx';
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
            name="W2Tools"
            component={CategoriesScreen}
            options={{
              tabBarLabel: '工具集',
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({color, size}) => {
                return <Icon name="shape-plus" size={size} color={color} />;
              },
            }}
          />
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
          <Tab.Screen
            name="设置"
            component={SettingsSceern}
            options={{
              tabBarLabel: '设置',
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({color, size}) => {
                return <Icon name="cog" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="debug"
            component={TestPage}
            options={{
              tabBarLabel: '调试',
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({color, size}) => {
                return <Icon name="bug" size={size} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
