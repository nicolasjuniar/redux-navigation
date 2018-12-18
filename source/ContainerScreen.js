import React, {Component} from 'react'
import {View, Button} from 'react-native'
import TopNavigator from './Top/TopNavigator'
import BottomNavigator from './Bottom/BottomNavigator'
import TopScreen from "./Top/TopScreen";

export default class ContainerScreen extends Component {
    static navigationOptions = {
        header: null
    }

    clickButton() {
        // this.refs.bottom.goToSecondBottom()
       this.refs.top.ikiMethod()
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Button title={'aaaa'}
                        onPress={() => this.clickButton()}/>
                <View style={{flex: 1}}><TopNavigator ref={'top'}/></View>
                <View style={{flex: 1}}><BottomNavigator ref={'bottom'}/></View>
            </View>

        )
    }
}

/*
                        <View>
                <Button title={'change background'} onPress={()=>this.props.navigation.navigate('changeBackground')}/>
            </View>
 */
