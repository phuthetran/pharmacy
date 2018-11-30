import React from 'react';
import {
   TouchableHighlight, View,
  Text, TextInput, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './style';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.pdTop6}>{'     '}
            <Ionicons style={styles.iconCellFunction} name="md-menu" size={30} />
          </Text>
        </TouchableOpacity>
      ),
      headerTitle: 'Pharmacy App',
      headerTitleStyle: {
        fontWeight: '700',
        paddingLeft: 38,
      },
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.pdTop6}><Ionicons style={styles.iconCellFunction} name="md-cart" size={30} />{'     '}</Text>
          <Text style={styles.numberSupCart}>12</Text>
        </TouchableOpacity>
      ),
      
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.search} underlineColorAndroid="transparent"
            placeholder="Search what you need here..."
          />
        </View>
        <View style={{ flex: 8, }}>
          <Text style={styles.bold}>Featured Categories</Text>
          <FeaturedCategories navi={this.props.navigation} />
        </View>
      </View>
    );
  }
}
class FeaturedCategories extends React.Component {
  navigateToPage = (routName) => {
    this.props.navi.navigate(routName);
  }
  render() {
    const { navigate } = this.props.navi;
    //const navigate = this.props.navi.navigate; //y nghia nhu dong 52
    return (
      <View style={styles.containerCate}>
        <View style={styles.viewIcon}>
          <TouchableHighlight style={styles.cellTouch} onPress={() => this.navigateToPage('Prescription')}>
            <View style={styles.cellFunction} >
              <Ionicons style={styles.iconCellFunction} name="md-clipboard" size={110} />
              <Text>Prescription</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cellTouch} onPress={() => navigate('Otc')}>
            <View style={styles.cellFunction}>
              <Ionicons style={styles.iconCellFunction} name="md-list-box" size={110} />
              <Text>OTC</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.viewIcon}>
          <TouchableHighlight style={styles.cellTouch} onPress={() => navigate('HealthAid')}>
            <View style={styles.cellFunction}>
              <Ionicons style={styles.iconCellFunction} name="md-medkit" size={110} />
              <Text>Health Aid</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cellTouch} onPress={() => navigate('Personal')}>
            <View style={styles.cellFunction}>
              <Ionicons style={styles.iconCellFunction} name="md-person" size={110} />
              <Text>Personal</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.viewIcon}>
          <TouchableHighlight style={styles.cellTouch} onPress={() => navigate('Diabetes')}>
            <View style={styles.cellFunction}>
              <Ionicons style={styles.iconCellFunction} name="md-thumbs-up" size={110} />
              <Text>Diabetes</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.cellTouch} onPress={() => navigate('Ayurvedic')}>
            <View style={styles.cellFunction}>
              <Ionicons style={styles.iconCellFunction} name="md-leaf" size={110} />
              <Text>Ayurvedic</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}


