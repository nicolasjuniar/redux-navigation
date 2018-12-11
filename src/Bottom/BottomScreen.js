import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class BottomScreen extends Component{
    render(){
        return(
            <View>
                <Text>Iki Bottom Screen</Text>
                <Button title={'pencet aku dung'} onPress={()=>this.props.navigation.navigate('secondBottom')}/>
            </View>
        )
    }
}
