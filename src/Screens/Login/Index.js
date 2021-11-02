import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Ionicons} from 'react-native-vector-icons'
import Api from '../../Components/Api';
import firebase from 'firebase';

import styles from './Styles';

export default function Login( navigation ) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigator = useNavigation();

    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangeSenha = (txtSenha) => {
        setSenha(txtSenha)
    }

    const login = () => {
        firebase.auth().signInWithEmailAndPassword(email, senha).then(() => {
            alert('Login feito com sucesso!!')

            goHome();
        }).catch(() => {
            alert('E-mail e/ou senha incorretos!!')
        })
    }
/*
    const actionLoginGoogle = async () => {
        let result = await Api.loginGoogle();

        if(result){
            onReceiveGoogle(result.user);
        }else{
            alert('Error');
        }
    }
*/
    function goRegister(){
        navigator.navigate('Register');
    }
    
    function goHome(){
        navigator.navigate('Home')
    }

 return (
    <SafeAreaView style={styles.background}>        
        <View style={styles.container}>
            <TextInput
            style={styles.input} 
            placeholder={'Insira seu email'}
            value={email}
            autoCorrect={false}
            onChangeText={txtEmail => onChangeEmail(txtEmail)}
            />

            <TextInput 
            style={styles.input} 
            placeholder={'Insira sua senha'} 
            value={senha}
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={txtSenha => onChangeSenha(txtSenha)}
            />

            <TouchableOpacity style={styles.btnAcess} onPress={login} >
                <Text style={styles.acessText}>Acessar</Text>
            </TouchableOpacity>

            <Text style={styles.createText}>
                Não tem uma conta? 
                <TouchableOpacity style={styles.btnCreate} onPress={goRegister} >
                    <Text style={styles.createLink}>Criar</Text>
                </TouchableOpacity>
            </Text>

            <Text style={styles.textFG}>Ou faça login com:</Text>

            <View style={styles.ViewFG}>
                <Ionicons
                style={{marginHorizontal: 15, marginTop: 10}}
                name='logo-google'
                size={40}
                color='black'
                onPress={() => {}} />

                <Ionicons
                style={{marginHorizontal: 15, marginTop: 10}}
                name='logo-facebook'
                size={40}
                color='black'
                onPress={() => {}} />
            </View>
            
        </View>
    </SafeAreaView>
       
   
  );
}