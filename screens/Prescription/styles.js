import { StyleSheet, } from 'react-native';
const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  textUpload: {
    flex: 5,
    alignItems: 'center',
  },
  imageUpload: {
    flex: 9,
    alignItems: 'center',
  },
  menuBottom: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#03C9D6',
    alignItems: 'center',
  },
  btnCamera: {
    flex: 1,
    flexDirection: 'row',
  },
  btnGallery: {
    flex: 1,
    flexDirection: 'row',
    borderLeftWidth: 2,
    borderLeftColor: 'black',
  },
  iconMenuBottom: {
    marginRight: 15,
    marginLeft: 15,
    
  },
  textWhite: {
    color: 'white',
  },
  textUnderline:{
    paddingTop:60,
    textDecorationLine: 'underline',
    fontSize:25,
  },
});
export default styles;  