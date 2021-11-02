import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';
import firebaseConfig from '../../Components/firebaseConfig';

import register from './Styles'
import { ScrollView } from 'react-native';

export default function Register( navigation ) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [city, setCity] = useState('');

    const onChangeName = (txtName) => {
        setName(txtName)
    }
    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangeSenha = (txtSenha) => {
        setSenha(txtSenha)
    }
    const onChangeCity = (txtCity) => {
        setCity(txtCity)
    }

    const cadastration = () => {
        firebaseConfig.auth().createUserWithEmailAndPassword(email, senha).then(() => {
            alert('Cadastrado com Sucesso!')
        }).catch(() => {
            alert('Falha ao cadastrar usuário!')
        })
    }

    return(
        <ScrollView style={register.background}>

            <View style={register.container}>
            <Text style={register.text}>Digite seu nome</Text>
                <TextInput 
                style={register.input}
                value={name}
                onChangeText={txtName => onChangeName(txtName)}
                />

                <Text style={register.text}>Qual é o seu e-mail?</Text>
                <TextInput 
                style={register.input}
                value={email}
                onChangeText={txtEmail => onChangeEmail(txtEmail)}
                />

                <Text style={register.text}>Qual é a sua senha?</Text>
                <TextInput 
                style={register.input}
                secureTextEntry={true}
                value={senha}
                onChangeText={txtSenha => onChangeSenha(txtSenha)}
                />

                <Text style={register.text}>Digite o nome de sua cidade</Text>
                <TextInput 
                style={register.input}
                value={city}
                onChangeText={txtCity => onChangeCity(txtCity)}
                />
                
                <TouchableOpacity style={register.btnCreate} onPress={cadastration}>
                    <Text style={register.createText}>Inscrever-se</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        
    );
    
}