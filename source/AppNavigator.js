import React from 'react'
import {createStackNavigator} from 'react-navigation'
import ContainerScreen from "./ContainerScreen";
import ChangeBackgroundComponent from "./ChangeBackgroundComponent";
import TopNavigator from './Top/TopNavigator'
import BottomNavigator from './Bottom/BottomNavigator'

const appNavigator = createStackNavigator({
    container: {
        screen: ContainerScreen
    },
    changeBackground: {
        screen: BottomNavigator
    }
})

export default appNavigator
