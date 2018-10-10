import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import HomeScreen from './HomeScreen'
import { DrawerNavigator, StackNavigator } from 'react-navigation'

import HomeScreenTabNavigator from './HomeScreenTabNavigator'

const InnerStackNavigator = new StackNavigator({
    TabNavigator: {
        screen: HomeScreenTabNavigator
    }
})

const HomeStackNavigator = new StackNavigator({
    HomeNavigator: {
        screen: HomeScreen
    }
})

const AppDrawerNavigator = new DrawerNavigator({
    'About Us': { screen: InnerStackNavigator },
    'Our Services': { screen: HomeStackNavigator },
    'Online Booking': { screen: InnerStackNavigator },
    'Gallery': { screen: InnerStackNavigator },
    'Find Our Branches': { screen: InnerStackNavigator },
    'Contact Us': { screen: InnerStackNavigator },
})


export default AppDrawerNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});