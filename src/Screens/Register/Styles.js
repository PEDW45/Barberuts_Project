import { StyleSheet, StatusBar } from 'react-native';

const register = StyleSheet.create({

    background: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#FFF'
    },

    viewLogo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    title:{
        justifyContent: 'flex-start'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 30,
        //width: '90%',
    },

    input: {
        backgroundColor: 'white',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 20,
        borderRadius: 7,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        padding: 10
    },

    text: {
        fontSize: 20,
        color: 'black',
    },

    btnCreate: {
        backgroundColor: 'black',
        width: '40%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
     },
    
     createText: {
        fontSize: 20,
        color: 'white'
     },
});

export default register;