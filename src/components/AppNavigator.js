import React from 'react'
import {createStackNavigator} from 'react-navigation'
import MainPage from "./MainPage";
import ChooseColorPage from "./ChooseColorPage";

const appNavigator = createStackNavigator({
    main: {
        screen: MainPage
    },
    chooseColor: {
        screen: ChooseColorPage
    }
}, {
    initialRouteName: 'main'
})

export default appNavigator
