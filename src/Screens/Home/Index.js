import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { Text, View, FlatList, SafeAreaView, TextInput } from 'react-native';
import {Ionicons} from 'react-native-vector-icons'
import styles from './Styles';

export default function Home(  ) {

  const navigator = useNavigation();
  const [pesquisa, setPesquisa] = useState('');

  function goPerfil(){
    navigator.navigate('Perfil');
}

  function goBarber(){
    navigator.navigate('BarberShop');
  }

  const DATA = [
    {
      id: '1',
      title: 'Duh Barber'
    }
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{ title }</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  )
    

  return (
    <SafeAreaView style={styles.backgroud}>
      {/*Cabeçalho da Home */}
      <View style={styles.cabecalho}>
        <Ionicons
        name='person'
        size={40}
        color='black'
        onPress={goPerfil} />

        <TextInput style={styles.input}
        placeholder='Pesquisar'
        autoCorrect={false}
        value={pesquisa}
        onChangeText={(value) => setPesquisa(value)} />

        <Ionicons
        name='search'
        size={40}
        color='black'
        onPress={() => {}} />
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}