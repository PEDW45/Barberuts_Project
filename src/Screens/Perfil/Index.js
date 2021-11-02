import React, {useState} from 'react';
import { Text, View, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native';

import styles from "./Styles";

export default function Perfil() {
    return(
        <SafeAreaView style={styles.background}>
            <Image style={styles.image} source={require('../../img/logo.png')} />
            <Text>Nome:</Text>
            <TextInput 
            style={styles.input} 
            placeholder={'Nome'}
            editable={false}
            />

            <Text>E-mail:</Text>
            <TextInput 
            style={styles.input} 
            placeholder={'E-mail'}
            editable={false}
            />

            <Text>Senha:</Text>
            <TextInput 
            style={styles.input} 
            placeholder={'Senha'}
            editable={false}
            />

            <Text>Localidade:</Text>
            <TextInput 
            style={styles.input} 
            placeholder={'Localização'}
            editable={false}
            />

            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
}
