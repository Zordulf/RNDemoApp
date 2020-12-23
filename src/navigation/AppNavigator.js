import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import JobsListScreen from '../screens/JobsListScreen';
import JobsDetailsScreen from '../screens/JobsDetailsScreen';
import SavedScreen from '../screens/SavedScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <MaterialIcons name='menu' size={30} color='#72bcd4' onPress={() => {navigation.openDrawer()}} style={{marginLeft: 20}}/>
  );
}

function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft/>
      }}
    >
      <Stack.Screen 
        name='JobsList' 
        component={JobsListScreen}
        options={{title: 'Jobs'}} 
      />
      <Stack.Screen 
        name='JobsDetails' 
        component={JobsDetailsScreen}
        options={{title: 'Jobs Details'}}  
      />
    </Stack.Navigator>
  );
}

function SavedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft/>
      }}
    >
      <Stack.Screen name="Saved Jobs" component={SavedScreen} />
    </Stack.Navigator>
  );
}

function TabsNavigator(){
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName;
          if(route.name == 'Home') {
            iconName = 'home'
          } else if (route.name == 'Saved') {
            iconName = 'favorite'
          }
          return <MaterialIcons name={iconName} size={24} color='#72bcd4'/>
        }
      })}
    >
      <Tabs.Screen name='Home' component={HomeNavigator} />
      <Tabs.Screen name='Saved' component={SavedNavigator} />
    </Tabs.Navigator>
  );
}

function AboutNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft/>
      }}
    >
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Jobs' component={TabsNavigator} />
        <Drawer.Screen name='About' component={AboutNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;