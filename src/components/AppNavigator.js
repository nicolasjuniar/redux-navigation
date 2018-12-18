import React from 'react'
import {createStackNavigator} from 'react-navigation'
import MainPage from "./MainPage";
import ChooseColorPage from "./ChooseColorPage";
import ContainerScreen from "../../source/ContainerScreen";

const appNavigator = createStackNavigator({
    main: {
        screen: ContainerScreen
    },
    chooseColor: {
        screen: ChooseColorPage
    }
}, {
    initialRouteName: 'main'
})

export default appNavigator
