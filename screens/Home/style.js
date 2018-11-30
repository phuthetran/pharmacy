import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
    },
    logoIcon: {
      width: 80,
      height: 80,
    },
    containerIcon: {
      alignItems: 'center',
    },
    search: {
      borderWidth: 15,
      borderColor: '#03C9D6',
      backgroundColor: 'white',
      paddingLeft: 20,
      paddingRight: 15,
    },
    bold: {
      fontWeight: 'bold',
      paddingLeft: 20,
      paddingTop: 5,
    },
    cellFunction: {
      backgroundColor: '#E6E8E7',//000 333 666 999 ccc ddd eee fff
      alignItems: 'center',
      margin: 4,
      flex: 1,
    },
    containerCate: {
      margin: 4,
      flex: 1,
    },
    viewIcon: {
      flex: 1,
      flexDirection: 'row',
    },
    cellTouch: {
      flex: 1,
    },
    iconCellFunction: {
      color: '#11B8BE',
    },
    headerTitleApp: {
      textAlign: 'center',
    },
    numberSupCart: {
      fontSize: 12,
      fontWeight: 'bold',
      position: 'absolute',
      paddingTop: 2,
      top: 0,
      right: 4,
      backgroundColor: '#F9D268',
      borderRadius: 10,
      width: 20,
      height: 20,
      textAlign: 'center',
    },
    pdTop6: {
      paddingTop: 6,
    },
  });
  export default styles;  