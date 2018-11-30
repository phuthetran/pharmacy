import React from 'react';
import {
    ScrollView, StyleSheet,
    View, Text
} from 'react-native';

export default class PersonalScreen extends React.Component {
    static navigationOptions = {
        title: 'Personal',
    };
    render() {
        return (
            <View>
                <Text>Personal Page</Text>
            </View>
        );
    }
};