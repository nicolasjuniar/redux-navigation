import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../state/Colors.js';
import {connect} from 'react-redux'

class MainPage extends Component {

    static navigationOptions = {
        header: null
    }

    onChooseColor = () => {
        this.props.navigation.navigate('chooseColor')
    }

    selectedColor = () => {
        const {colorName}= this.props
        return colorName
    }

    render() {
        const color = this.selectedColor();
        return (
            <View style={{flex: 1, alignSelf: 'stretch', backgroundColor: color, alignItems: 'center'}}>
                <TouchableOpacity onPress={this.onChooseColor} style={{marginTop: 10}}>
                    <Text style={{color: 'white', fontSize: 20}}>Choose Color</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { colorName: state.color.colorName };
};

export default connect(mapStateToProps)(MainPage);
