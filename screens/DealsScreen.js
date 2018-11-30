import React from 'react';
import {
    ScrollView, StyleSheet,
    View, Text,TouchableHighlight
} from 'react-native';

export default class DealsScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    navigateToCart = () => {
        this.props.navigation.navigate('Cart');
    }
    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.navigateToCart} >
                    <Text style={{marginTop:30}}>Deal page</Text>
                </TouchableHighlight>
            </View>
        );
    }
};