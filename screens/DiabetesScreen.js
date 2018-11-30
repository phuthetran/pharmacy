import React from 'react';
import {
    ScrollView, StyleSheet,
    View, Text
} from 'react-native';

export default class DiabetesScreen extends React.Component {
    static navigationOptions = {
        title: 'Diabetes',
    };
    render() {
        return (
            <View>
                <Text>Diabetes Page</Text>
            </View>
        );
    }
};