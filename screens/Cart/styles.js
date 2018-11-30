import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';
const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  counterItem: {
    flex: 3,
  },
  prescriptionItem: {
    flex: 4,
  },
  instructionItem: {
    flex: 8,
    backgroundColor: 'yellow',
  },
  details: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  mini: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    flex: 2,
    borderTopColor: 'gray',
    borderTopWidth: 1,
    paddingLeft: 10,
    paddingTop: 18,
  },
  strong: {
    fontWeight: '500',
  },
  iconAdd: {
    color: 'white',
    paddingLeft:5,
    paddingTop:2,
  },
  circle: {
   /* borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,*/
    borderRadius:10,
    width:20,
    height:20,
    backgroundColor: '#03C9D6',
  },
  textGray: {
    color: '#999',
  },
  textRed:{
    color:'red',
  },
  iconLeft:{
    flex:1,
    alignItems:'center',
  },
  iconRight:{
    flex:1,
  },
  detailsMid:{
    flex:5,
  },
});
export default styles;  