import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Home';
import DealsScreen from '../screens/DealsScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import CartScreen from '../screens/Cart';
import PrescriptionScreen from '../screens/Prescription';
import OtcScreen from '../screens/OtcScreen';
import HealthAidScreen from '../screens/HealthAidScreen';
import PersonalScreen from '../screens/PersonalScreen';
import DiabetesScreen from '../screens/DiabetesScreen';
import AyurvedicScreen from '../screens/AyurvedicScreen';
import CameraScreen from '../screens/Camera/camera';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Camera: CameraScreen,
  Prescription: PrescriptionScreen,
  Otc: OtcScreen,
  HealthAid: HealthAidScreen,
  Personal: PersonalScreen,
  Diabetes: DiabetesScreen,
  Ayurvedic: AyurvedicScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : ''}`
          : `md-home${focused ? '' : ''}`
      }
    />
  ),
};
const MyOrderStack = createStackNavigator({
  MyOrder: MyOrderScreen,
});

MyOrderStack.navigationOptions = {
  tabBarLabel: 'My Order',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list-box' : 'md-list-box'}
    />
  ),
};
const CartStack = createStackNavigator({
  Cart: CartScreen,
});

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
    />
  ),
};
const DealsStack = createStackNavigator({
  Deals: DealsScreen,
});

DealsStack.navigationOptions = {
  tabBarLabel: 'Deals',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-pricetags' : 'md-pricetags'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  MyOrderStack,
  CartStack,
  DealsStack,
});
