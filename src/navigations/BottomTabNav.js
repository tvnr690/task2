import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import BottomHistory from "../screens/BottomHistory";
import BottomSubscription from "../screens/BottomSubscription";
import BottomTrending from "../screens/BottomTrending";
import BottomIndex from "../screens/BottomIndex";
import StackNav from "./StackNav";
import Icon from 'react-native-vector-icons/FontAwesome5';


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    // <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="task2" component={StackNav}
        options={{
          tabBarLabel: 'task2',
          tabBarColor: 'red',
          tabBarIcon: ({ color }) => (
            <Icon name="tasks" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="History" component={BottomHistory} 
       options={{
        tabBarLabel: 'History',
        tabBarColor: 'green',
        tabBarIcon: ({ color }) => (
          <Icon name="history" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Index" component={BottomIndex} 
      options={{
        tabBarLabel: 'Index',
        tabBarColor: 'blue',
        tabBarIcon: ({ color }) => (
          <Icon name="indent" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Subscription" component={BottomSubscription} 
      options={{
        tabBarLabel: 'Subscription',
        tabBarColor: 'black',
        tabBarIcon: ({ color }) => (
          <Icon name="search-location" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Trending" component={BottomTrending} 
      options={{
        tabBarLabel: 'pink',
        tabBarColor: 'red',
        tabBarIcon: ({ color }) => (
          <Icon name="street-view" color={color} size={26} />
        ),
      }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default MyTabs;


