import React, {Component} from 'react'
import {View, Text} from 'react-native'
import TopNavigator from './Top/TopNavigator'
import BottomNavigator from './Bottom/BottomNavigator'

export default class ContainerScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1}}><TopNavigator/></View>
                <View style={{flex: 1}}><BottomNavigator/></View>
            </View>
        )
    }
}
