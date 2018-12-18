import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'
import connect from "react-redux/es/connect/connect";

class BottomScreen extends Component{

    goToSecondBottom=()=>{
        this.props.navigation.navigate('secondBottom')
    }

    render(){
        const {colorName}= this.props
        return(
            <View style={{backgroundColor:colorName}}>
                <Text>aaaa</Text>
                <Button title={'pencet aku dung'} onPress={this.goToSecondBottom}/>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { colorName: state.color.colorName };
};

export default connect(mapStateToProps)(BottomScreen);
