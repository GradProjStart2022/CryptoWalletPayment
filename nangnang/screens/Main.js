import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';
import Logo from '../components/Logo';

const Main = ({ navigation }) => {
    return (
        <View style={styles.MainView}>
            <View>
                <Logo />
            </View>
            <View style={styles.ButtonView}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>navigation.navigate('MyWallets')}>
                    <Text style={styles.text}>지갑등록하기 / 지갑확인</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>결제내역</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>내정보</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    MainView: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    ButtonView: {

        height: '50%',
        width:'50%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignSelf:'center',
    },
    button: {

        width: '100%',
        height: 50,
        borderRadius: 10,
        backgroundColor: Colors.indigo500,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: Colors.Incarnadine500
    }
})
export default Main;