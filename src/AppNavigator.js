import React from 'react'
import {createStackNavigator} from 'react-navigation'
import ContainerScreen from "./ContainerScreen";

const appNavigator= createStackNavigator({
    container:{
        screen:ContainerScreen
    }
})

export default appNavigator
