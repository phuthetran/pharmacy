import React from 'react';
import {
    ScrollView, StyleSheet,
    View, Text
} from 'react-native';

export default class MyOrderScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View>
                <Text>My Order Page</Text>
            </View>
        );
    }
};