import React from 'react';
import uuid from 'uuid';
import { Text, View, TouchableOpacity, Image,Vibration } from 'react-native';
import { Camera, Permissions, FileSystem, Asset, ImagePicker,ImageManipulator,  } from 'expo';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

export class CameraScreen extends React.Component {
  static navigationOptions = {
    title: 'Camera',
  };
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      ready: false,
      image: null,
      photoId:1,
    };
  }
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });

    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos/').catch(e => {
      console.log(e, 'Directory exists');
    });
  }
  takePhoto = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      let resizedPhoto = await ImageManipulator.manipulate(
          photo.uri,
          [{ resize: { width: 108, height: 192 } }],
          { compress: 0, format: "jpg", base64: false }
      );
      FileSystem.moveAsync({
          from: resizedPhoto.uri,
          to: `${FileSystem.documentDirectory}photos/Photo_${
              this.state.photoId
          }.jpg`
      });
      this.setState({ photoId: this.state.photoId + 1 });
      alert(this.state.photoId);
      Vibration.vibrate();            
  }
    
    // if (this.camera) {
    //   let photo = await this.camera.takePictureAsync();
    //   await FileSystem.copyAsync({
    //     from: photo.uri,
    //     to: './photosA/' + uuid() + '.jpg'
    //   });

    //   console.log('./photosA/' + uuid() + '.jpg');

    // }
  }



  openGallery = async () => {
    const permissions = Permissions.CAMERA_ROLL;
    const { status } = await Permissions.askAsync(permissions);

    console.log(permissions, status);
    if (status === 'granted') {
      let image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'Images',
      }).catch(error => console.log(permissions, { error }));
      console.log(permissions, 'SUCCESS', image);
    }
  }
  switchCamera = () => {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    });
  };
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}
            ref={ref => { this.camera = ref; }}>
            <View style={styles.background}>
              <View style={styles.switch}>
                <TouchableOpacity
                  onPress={() => this.switchCamera()}>
                  <Text style={styles.icon}>
                    <Ionicons name="md-swap" size={40} />
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.spacing}></View>
              <View style={styles.groupGalleryTake}>
                <View style={styles.gallery}>
                  <TouchableOpacity
                    onPress={() => this.openGallery()}>
                    <Text style={styles.icon}>
                      <Ionicons name="md-photos" size={40} />
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.take}>
                  <TouchableOpacity
                    onPress={() => this.takePhoto()}>
                    <Text style={styles.icon}>
                      <Ionicons name="md-camera" size={40} />
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.take}>
                </View>
              </View>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
export default CameraScreen;