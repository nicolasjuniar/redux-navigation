import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class BottomScreen extends Component{

    goToSecondBottom=()=>{
        this.props.navigation.navigate('secondBottom')
    }

    render(){
        return(
            <View>
                <Text>aaaa</Text>
                <Button title={'pencet aku dung'} onPress={this.goToSecondBottom}/>
            </View>
        )
    }
}
