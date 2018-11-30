import { StyleSheet, } from 'react-native';
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    gallery: {
        alignItems: 'flex-start',
        flex: 1,
        paddingLeft:5,
        paddingBottom:3,
    },
    take: {
        alignItems: 'center',
        flex: 1,
        paddingBottom:3,
    },
    switch: {
        flex:1,
        alignItems: 'flex-end',
        paddingRight:5,
    },
    icon: {
        fontSize: 15,
        color: 'white',
    },
    groupGalleryTake: {
        flexDirection:'row',
        flex: 1,
        justifyContent:'space-between',
    },
    spacing:{
        flex:12,
    },
});
export default styles;  