import React from 'react';
import {
    ScrollView, StyleSheet,
    View, Text
} from 'react-native';

export default class AyurvedicScreen extends React.Component {
    static navigationOptions = {
        title: 'Ayurvedic',
    };
    render() {
        return (
            <View>
                <Text>Ayurvedic Page</Text>
            </View>
        );
    }
};