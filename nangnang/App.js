import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStarted from './screens/GetStarted';
import Login from './screens/Login';
import Main from './screens/Main';
import MyWallets from './screens/MyWallets';
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    // @@@ 스크린을 필요에 따라 구분하는법 배우고 해야함
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          <Stack.Screen name="Main" component={Main} options={{headerShown:false}}/>
          <Stack.Screen name="MyWallets" component={MyWallets} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#f9f9f9'
    }
});
