import React from 'react';
import {
    ScrollView, StyleSheet,
    View, Text
} from 'react-native';

export default class OtcScreen extends React.Component {
    static navigationOptions = {
        title: 'OTC',
    };
    render() {
        return (
            <View>
                <Text>Over The Counter Drug</Text>
            </View>
        );
    }
};