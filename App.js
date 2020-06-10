import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/homeScreen';
import BrowseScreen from './components/browseScreen';
import Youtube from './components/youtube';
import Tabs from './components/tabs';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: 'white',
    surface: '#2F2F2F',
    primary: '#3F51B5',
    placeholder: 'gray',
  },
  dark: true,
  mode: 'adaptive',
};


export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerLeft: null,
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Browse"
            component={BrowseScreen}
          />
          <Stack.Screen
            name="Youtube"
            component={Youtube}
          />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}