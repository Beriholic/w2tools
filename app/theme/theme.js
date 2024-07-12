import {Appearance} from 'react-native';
import {adaptNavigationTheme, DefaultTheme} from 'react-native-paper';
import * as NavigationBar from 'expo-navigation-bar';

export const getTheme = () => {
  const mode = Appearance.getColorScheme();
  return mode === 'dark' ? MDTheme.DarkTheme : MDTheme.LightTheme;
};

export const getNavTheme = () => {
  const mode = Appearance.getColorScheme();
  const navTheme = mode === 'dark' ? NavTheme.DarkTheme : NavTheme.LightTheme;
  NavigationBar.setBackgroundColorAsync(navTheme.colors.card);
  return navTheme;
};

const LightTheme = {
  ...DefaultTheme,
  colors: {
    primary: '#4C662B',
    surfaceTint: '#4C662B',
    onPrimary: '#FFFFFF',
    primaryContainer: '#CDEDA3',
    onPrimaryContainer: '#102000',
    secondary: '#586249',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#DCE7C8',
    onSecondaryContainer: '#151E0B',
    tertiary: '#386663',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#BCECE7',
    onTertiaryContainer: '#00201E',
    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',
    background: '#F9FAEF',
    onBackground: '#1A1C16',
    surface: '#F9FAEF',
    onSurface: '#1A1C16',
    surfaceVariant: '#E1E4D5',
    onSurfaceVariant: '#44483D',
    outline: '#75796C',
    outlineVariant: '#C5C8BA',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#2F312A',
    inverseOnSurface: '#F1F2E6',
    inversePrimary: '#B1D18A',
    primaryFixed: '#CDEDA3',
    onPrimaryFixed: '#102000',
    primaryFixedDim: '#B1D18A',
    onPrimaryFixedVariant: '#354E16',
    secondaryFixed: '#DCE7C8',
    onSecondaryFixed: '#151E0B',
    secondaryFixedDim: '#BFCBAD',
    onSecondaryFixedVariant: '#404A33',
    tertiaryFixed: '#BCECE7',
    onTertiaryFixed: '#00201E',
    tertiaryFixedDim: '#A0D0CB',
    onTertiaryFixedVariant: '#1F4E4B',
    surfaceDim: '#DADBD0',
    surfaceBright: '#F9FAEF',
    surfaceContainerLowest: '#FFFFFF',
    surfaceContainerLow: '#F3F4E9',
    surfaceContainer: '#EEEFE3',
    surfaceContainerHigh: '#E8E9DE',
    surfaceContainerHighest: '#E2E3D8',

    elevation: {
      level0: 'transparent',
      level1: 'rgb(244, 245, 234)',
      level2: 'rgb(238, 240, 227)',
      level3: 'rgb(233, 236, 220)',
      level4: 'rgb(231, 234, 218)',
      level5: 'rgb(227, 231, 213)',
    },
  },
};

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    primary: '#B1D18A',
    surfaceTint: '#B1D18A',
    onPrimary: '#1F3701',
    primaryContainer: '#354E16',
    onPrimaryContainer: '#CDEDA3',
    secondary: '#BFCBAD',
    onSecondary: '#2A331E',
    secondaryContainer: '#404A33',
    onSecondaryContainer: '#DCE7C8',
    tertiary: '#A0D0CB',
    onTertiary: '#003735',
    tertiaryContainer: '#1F4E4B',
    onTertiaryContainer: '#BCECE7',
    error: '#FFB4AB',
    onError: '#690005',
    errorContainer: '#93000A',
    onErrorContainer: '#FFDAD6',
    background: '#12140E',
    onBackground: '#E2E3D8',
    surface: '#12140E',
    onSurface: '#E2E3D8',
    surfaceVariant: '#44483D',
    onSurfaceVariant: '#C5C8BA',
    outline: '#8F9285',
    outlineVariant: '#44483D',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#E2E3D8',
    inverseOnSurface: '#2F312A',
    inversePrimary: '#4C662B',
    primaryFixed: '#CDEDA3',
    onPrimaryFixed: '#102000',
    primaryFixedDim: '#B1D18A',
    onPrimaryFixedVariant: '#354E16',
    secondaryFixed: '#DCE7C8',
    onSecondaryFixed: '#151E0B',
    secondaryFixedDim: '#BFCBAD',
    onSecondaryFixedVariant: '#404A33',
    tertiaryFixed: '#BCECE7',
    onTertiaryFixed: '#00201E',
    tertiaryFixedDim: '#A0D0CB',
    onTertiaryFixedVariant: '#1F4E4B',
    surfaceDim: '#12140E',
    surfaceBright: '#383A32',
    surfaceContainerLowest: '#0C0F09',
    surfaceContainerLow: '#1A1C16',
    surfaceContainer: '#1E201A',
    surfaceContainerHigh: '#282B24',
    surfaceContainerHighest: '#33362E',

    elevation: {
      level0: 'transparent',
      level1: 'rgb(34, 37, 29)',
      level2: 'rgb(38, 43, 31)',
      level3: 'rgb(43, 48, 34)',
      level4: 'rgb(44, 50, 35)',
      level5: 'rgb(47, 54, 37)',
    },
    surfaceDisabled: 'rgba(227, 227, 219, 0.12)',
    onSurfaceDisabled: 'rgba(227, 227, 219, 0.38)',
    backdrop: 'rgba(46, 50, 40, 0.4)',
  },
};

export const MDTheme = {
  LightTheme: LightTheme,
  DarkTheme: DarkTheme,
};

export const NavTheme = adaptNavigationTheme({
  reactNavigationDark: DefaultTheme,
  reactNavigationLight: DefaultTheme,
  materialDark: DarkTheme,
  materialLight: LightTheme,
});
