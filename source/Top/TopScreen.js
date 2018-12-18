import React, {Component} from 'react'
import {Button, View} from 'react-native'
import connect from "react-redux/es/connect/connect";
import {changeColor} from "../../src/actions/ColorChangedAction";

class TopScreen extends Component {
    render() {
        return (
            <View>
                <Button title={'Tulung dipencet'} onPress={()=>this.props.changeColor('#17A05E')}/>
            </View>
        )
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
    changeColor,
})(TopScreen);

