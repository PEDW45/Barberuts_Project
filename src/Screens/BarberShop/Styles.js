import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    background: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFF'
    },

    image: {
        height: '30%',
        width: '100%',
        borderRadius: 25,
        marginBottom: 20
    },

    titleView: {
        flex: 1,
        alignContent: 'flex-start',
    },

    textName: {
        fontSize: 20,
        fontStyle: 'italic'
    },

    buttonView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        backgroundColor: 'black',
        width: '50%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 5,
        marginVertical: 20,
        marginHorizontal: 10
    },
     
    buttonText: {
        color: 'white',
    } 
   });

export default styles;