import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Colors from './constants/colors';
import GetStarted from './screens/GetStarted';
import Login from './screens/Login';
import Main from './screens/Main';
import MyWallets from './screens/MyWallets';
import Register from './screens/Register';
const Stack = createNativeStackNavigator();

const Navigator = () =>{

  const isLoggedIn = false;

  if(!isLoggedIn){
    return (
        <Stack.Navigator >
            <Stack.Screen name="Register" component={Register} options={{headerShown : false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown : false}}/>
            {/* <Stack.Screen name="GetStarted" component={GetStarted} /> */}
          {/* <Stack.Screen name="Main" component={Main} /> */}
        </Stack.Navigator>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="MyWallets" component={MyWallets}/>
    </Stack.Navigator>
  )
}


export default function App() {





  return (

    // @@@ 스크린을 필요에 따라 구분하는법 배우고 해야함
    <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Navigator/>
        </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:Colors.backgroundwhite
    }
});
