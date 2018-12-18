import React, {Component} from 'react'
import {View, Button} from 'react-native'
import TopNavigator from './Top/TopNavigator'
import BottomNavigator from './Bottom/BottomNavigator'
import TopScreen from "./Top/TopScreen";
import {BottomWithNavigationState, TopWithNavigationState, store} from '../src/Store'
import {Provider} from 'react-redux'


export default class ContainerScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1}}>
                    <Provider store={store}>
                        <TopWithNavigationState/>
                    </Provider>
                </View>
                <View style={{flex: 1}}>
                    <Provider store={store}>
                        <BottomWithNavigationState/>
                    </Provider>
                </View>
            </View>

        )
    }
}

/*
                        <View>
                <Button title={'change background'} onPress={()=>this.props.navigation.navigate('changeBackground')}/>
            </View>
 */
