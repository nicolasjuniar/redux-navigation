import React from 'react'
import {createStackNavigator} from 'react-navigation'
import BottomScreen from "./BottomScreen";
import SecondBottomScreen from "./SecondBottomScreen";

const bottomNavigator = createStackNavigator({
    bottom: {
        screen: BottomScreen
    },
    secondBottom: {
        screen: SecondBottomScreen
    }
}, {
    initialRouteName: 'bottom'
})

export default bottomNavigator
