import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    background: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFF'
    },
    image: {
        height: '30%',
        width: '60%',
        borderRadius: 100,
        marginBottom: 20
    },

    input: {
        backgroundColor: 'white',
        width: '90%',
        marginBottom: 25,
        color: '#222',
        fontSize: 20,
        borderRadius: 7,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        padding: 10
    },

    buttonView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        backgroundColor: 'black',
        width: '30%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 5,
        marginVertical: 50,
        marginHorizontal: 5
    },
     
    buttonText: {
        color: 'white',
    } 
   });

export default styles;