import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, Pressable, Button} from 'react-native';
import { Link } from '@react-navigation/native';

import Colors from '../constants/colors';
import HeaderLogo from '../components/HeaderLogo';
import InputText from '../components/InputText';
import ScreenTitle from '../components/ScreenTitle';
import SubmitButton from '../components/Buttons/SubmitButton';
import GoogleButton from '../components/Buttons/GoogleButton';

const Register = ({ navigation }) => {
    return (
        <View style={styles.RegisterView}>
            <HeaderLogo />
            <View style={styles.title}>
                <ScreenTitle title="회원가입" content="암호화폐 지갑 통합 결제 플랫폼" />
            </View>
            <View style={styles.inputtext}>
                <InputText name="이메일" placeholder="이메일" />
                <InputText name="비밀번호" placeholder="******" />
                <InputText name="비밀번호 확인" placeholder="******" />
                <InputText name="이름" placeholder="홍길동" />
            </View>
            <View style={styles.ButtonView}>
                <SubmitButton>회원가입</SubmitButton>
                <GoogleButton>구글로 회원가입</GoogleButton>
                <View style={styles.GotoLogin}>
                    <Text>계정이 이미 있나요?</Text>
                    <Link to={{screen:'Login'}} style={styles.link}>로그인</Link>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    RegisterView: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    title:{
        flex:1,
    },  
    inputtext:{
        flex:3,
    },
    ButtonView: {
        flex:2,
        // paddinng:10,
        // marginTop: 10,
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    GotoLogin: {

        // marginHorizontal: 20,
        marginTop: 10,
        width: '70%',

        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'flex-end',
    },
    link:{
        color: Colors.orange500,
    }

});
export default Register;