import React, { Component } from 'react'
// Navigators
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'

// StackNavigator screens
import Splash from '../screens/Splash'
import Login from "../screens/Login"
import Register from "../screens/Register"
import CheckList from "../screens/CheckList"
import { Remarks } from '../screens/Remarks'

// DrawerNavigator screens
import Home from '../screens/Home'

//Icons
import Ionicons from "react-native-vector-icons/Ionicons"


export const Stack = createStackNavigator({
    Splash: {
        screen: Splash
    },
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
    CheckList: {
        screen: CheckList
    },
    Remarks:{
        screen: Remarks
    },
    Home: {
        screen: createDrawerNavigator({
            Home: {
                screen: Home,
                navigationOptions : {
                    drawerLabel: 'Home',
                    drawerIcon: ({ tintColor }) => (
                        <Ionicons name='ios-home' size={25} color={tintColor} />
                    ),
                }
            }
        })
    }
},{
    navigationOptions:{
        header: null
    }
})