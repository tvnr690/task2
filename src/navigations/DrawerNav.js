import * as React from 'react';
import { View, Text, Settings } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MyTabs from "./BottomTabNav";
import NotificationScreen from "../screens/NotificationScreen";


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
    </Drawer.Navigator>
  );
}
export default function DrawerNav() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }


