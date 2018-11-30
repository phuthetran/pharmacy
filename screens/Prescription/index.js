import React from 'react';
import {
    ScrollView, TouchableOpacity, Alert,
    View, Text, Image, TouchableHighlight,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
export default class PrescriptionScreen extends React.Component {
    static navigationOptions = {
        title: 'Prescription',
    };
    uploadPrescription = () => {
        Alert.alert('Bạn vừa ấn vào upload');
    }
    openGallery = () => {
        Alert.alert('Bạn vừa ấn vào Gallery');
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.content}>
                <View style={styles.textUpload}>
                    <Text style={styles.textUnderline}>Upload Prescription</Text>
                    <Text>Saving You,Time and Money</Text>
                </View>
                <View style={styles.imageUpload}>
                    <Image
                        style={{ width: 200, height: 200 }}
                        source={require('../../assets/images/prescription.png')}
                    />
                </View>
                <View style={styles.menuBottom}>
                    <TouchableOpacity style={styles.btnCamera} onPress={() => navigate('Camera')}>
                        <Ionicons style={[styles.iconMenuBottom, styles.textWhite]} name="md-camera" size={25} />
                        <Text style={styles.textWhite}>Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnGallery} onPress={this.openGallery}>
                        <Ionicons style={[styles.iconMenuBottom, styles.textWhite]} name="md-photos" size={25} />
                        <Text style={styles.textWhite}>Gallery</Text>
                    </TouchableOpacity>
                </View>
            </View >

        );
    }
};