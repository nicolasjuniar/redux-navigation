import React, {Component} from 'react'
import {Button, View} from 'react-native'

export default class TopScreen extends Component {

    ikiMethod = () => {
        alert('abcd')
    }

    render() {
        return (
            <View>
                <Button title={'Tulung dipencet'} onPress={this.ikiMethod}/>
            </View>
        )
    }
}
