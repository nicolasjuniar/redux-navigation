import React from 'react'
import {createStackNavigator} from 'react-navigation'
import TopScreen from "./TopScreen";

const topNavigator=createStackNavigator({
    top:{
        screen: TopScreen
    }
})

export default topNavigator
