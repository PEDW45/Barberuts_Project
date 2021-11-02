import React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

import styles from "./Styles";

export default function BarberShop() {
    return(
        <SafeAreaView style={styles.background}>
            <Image style={styles.image} source={require('../../img/logo.png')} />
            
            <View style={styles.titleView}>
                <Text style={styles.textName}>Nome_Estabelecimento</Text>
            </View>
            

            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Agendamentos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Barbeiros</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Galeria de Cortes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Localização</Text>
                </TouchableOpacity>

            </View>          
        </SafeAreaView>
    );
}
