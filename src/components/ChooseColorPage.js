import React, {Component} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {connect} from 'react-redux'
import {changeColor} from "../actions/ColorChangedAction";

class ChooseColorPage extends Component {

    onSelectColor = colorName => {
        this.props.changeColor(colorName)
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={{flex: 1, alignSelf: 'stretch', alignItems: 'center'}}>
                <TouchableOpacity style={{marginTop: 10}} onPress={() => this.onSelectColor('#DE5448')}>
                    <Text style={{color: '#DE5448', fontSize: 20}}>Red</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop: 10}} onPress={() => this.onSelectColor('#17A05E')}>
                    <Text style={{color: '#17A05E', fontSize: 20}}>Green</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop: 10}} onPress={() => this.onSelectColor('#498AF4')}>
                    <Text style={{color: '#498AF4', fontSize: 20}}>Blue</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
    changeColor,
})(ChooseColorPage);
