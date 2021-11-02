import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/Screens/Login/Index';
import Register from './src/Screens/Register/Index';
import Home from './src/Screens/Home/Index';
import Perfil from './src/Screens/Perfil/Index';
import BarberShop from './src/Screens/BarberShop/Index';

const Stack = createStackNavigator();

export default function App(){
/*
  const [user, setUser] = useState(null);

  const actionLoginDataGoogle = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }

    setUser(newUser);

  }

  if (user === null) {
    return (
      <Login onReceiveGoogle={actionLoginDataGoogle} />
    );
  }
*/
 return(
  
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>

      <Stack.Screen 
      name='Login' 
      component={Login}
      options={{headerShown: true}} />
      
      <Stack.Screen 
      name='Register' 
      component={Register}
      options={{headerShown: true}} />

      <Stack.Screen 
      name='Home' 
      component={Home}
      options={{headerShown: true}} />

      <Stack.Screen 
      name='Perfil' 
      component={Perfil}
      options={{headerShown: true}} />

      <Stack.Screen 
      name='BarberShop' 
      component={BarberShop}
      options={{headerShown: true}} />

    </Stack.Navigator>
  </NavigationContainer>
 );
}
