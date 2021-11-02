import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },

    image: {
        height: '30%',
        width: '60%',
        borderRadius: 100,
        marginBottom: 20
    },

    viewLogo: {
        flex: 1,
        justifyContent: 'center',

    },

    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        width: '90%',

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
   
    btnAcess: {
       backgroundColor: 'black',
       width: '40%',
       height: 40,
       borderRadius: 30,
       alignItems: 'center',
       justifyContent: 'center',
       marginTop: 15,
       marginBottom: 20
       
    },
   
    acessText: {
       fontSize: 20,
       color: 'white'
    },

    btnCreate: {
        marginTop: 10,
    },

    createText: {
        fontSize: 20,
        color: 'black',
    },

    createLink: {
        fontSize: 20,
        color: 'red',
    },

    ViewFG: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 15
    },

    textFG: {
        fontSize: 20,
        marginTop: 30,
    },


   });

export default styles;