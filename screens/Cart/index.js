import React from 'react';
import {
    Alert, TouchableOpacity,
    View, Text
} from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

export default class CartScreen extends React.Component {
    static navigationOptions = {
        title: 'Cart',
    };
    addItems = () => {
        Alert.alert('Bạn vừa ấn vào addItems');
    }
    render() {
        return (
            <View style={styles.content}>
                <View style={styles.counterItem}>
                    <View style={styles.details}>
                        <View style={styles.mini}>
                            <Text style={styles.textGray}>Payable Amount</Text>
                            <Text style={styles.strong}>30000 VNĐ</Text>
                        </View>
                        <View style={styles.mini}>
                            <Text style={styles.textGray}>Items added</Text>
                            <Text style={styles.strong}>1</Text>
                        </View>
                        <View style={styles.mini}>
                            <TouchableOpacity onPress={this.addItems}>
                                <View style={styles.circle}>
                                    <Ionicons style={styles.iconAdd} name="md-add" size={15} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.title}>
                        <Text>
                            Over the counter items
                        </Text>
                    </View>
                </View>
                <View style={styles.prescriptionItem}>
                    <View style={styles.details}>
                        <View style={styles.iconLeft}>
                            <Ionicons name="md-medkit" size={40} />
                        </View>
                        <View style={styles.detailsMid}>
                            <Text style={styles.strong}>Pari 30mg Tab</Text><Text style={styles.textGray}>(Strip of 10 tablets)</Text>
                            <Text style={styles.textGray}>Abott India Ltd</Text>
                            <Text style={styles.strong}>20000VNĐ</Text>
                        </View>
                        <View style={styles.mini}>
                            <TouchableOpacity onPress={this.addItems}>
                                <View style={styles.circle}>
                                    <Ionicons style={styles.iconAdd} name="md-add" size={15} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.title}>
                        <Text>
                            Prescription Items
                        </Text>
                        <Text style={styles.textRed}>Govt,regulations require prescription for these medicines</Text>
                    </View>

                </View>
                <View style={styles.instructionItem}>
                    <Text>P3</Text>
                </View>
            </View>
        );
    }
};