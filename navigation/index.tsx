/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native';

import TabOneScreen from '../screens/TabOneScreen';
import { AppDrawerParamList, HomeStackParamList } from '../types';
import { Entypo } from '@expo/vector-icons';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<HomeStackParamList>();

function HomeNavigator() {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>()

  return (
    <Stack.Navigator initialRouteName="TabOne">
      <Stack.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{
          title: '',
          headerLeft: null,
          headerRight: ({ onPress }) => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Entypo name="menu" size={24} style={{marginEnd: 10}} />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
        name="TabTwo"
        component={TabOneScreen}
        options={{
          title: '',
          headerLeft: null,
          headerRight: ({ onPress }) => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Entypo name="menu" size={24} style={{marginEnd: 10}} />
            </TouchableOpacity>
          )
        }}
      />
    </Stack.Navigator>
  )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const Drawer = createDrawerNavigator<AppDrawerParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomePage" component={HomeNavigator} />
      <Drawer.Screen name="AboutPage" component={HomeNavigator} />
    </Drawer.Navigator>
  );
}
