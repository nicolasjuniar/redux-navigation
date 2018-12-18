import React, {Component} from 'react'
import {View, Button} from 'react-native'

export default class ChangeBackgroundComponent extends Component {
    render() {
        return (
            <View style={{flex: 1, display: 'flex'}}>
                <Button title={'red'} onPress={() => alert('iki red')}
                        color={'red'}
                        style={{marginTop: 30}}/>
                <Button title={'blue'} onPress={() => alert('iki blue')}
                        color={'blue'}
                        style={{marginTop: 30}}/>
                <Button title={'green'} onPress={() => alert('iki yellow')}
                        color={'green'}
                        style={{marginTop: 30}}/>
            </View>
        )
    }
}
