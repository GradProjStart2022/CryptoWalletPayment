import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Link } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google'

import Colors from '../constants/colors';
import HeaderLogo from '../components/HeaderLogo';
import InputText from '../components/InputText';
import ScreenTitle from '../components/ScreenTitle';


import MyWallets from './MyWallets';
// web : 185496097106-sp0mrog1pvfhkg0kijstue30hf0ugtf6.apps.googleusercontent.com
// IOS : 185496097106-9losums1qg0iljj25kgt1krhcsp4h5eg.apps.googleusercontent.com
// Android : 185496097106-35agk1e07b0h6t2egjm0sdh88odo1u5k.apps.googleusercontent.com

WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }) => {

    const [accessToken, setAccessToken] = useState();
    const [userInfo, setUserInfo] = useState();

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId:"185496097106-sp0mrog1pvfhkg0kijstue30hf0ugtf6.apps.googleusercontent.com",
        iosClientId: "185496097106-9losums1qg0iljj25kgt1krhcsp4h5eg.apps.googleusercontent.com",
        androidClientId: "185496097106-35agk1e07b0h6t2egjm0sdh88odo1u5k.apps.googleusercontent.com"
    });

    const [logininput, setLoginInput] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        if (response?.type === "success") { //response의 타입이 success 이면
            setAccessToken(response.authentication.accessToken);
            // accessToken && getUserData(); // accessToken이 있으면 fetchUserInfo를 실행시킨다.
        }
    }, [response])// response값이 바뀔때만 실행

    const getUserData = async () => {
        let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });  
        userInfoResponse.json().then(data=>{
            setUserInfo(data);
        });
    };

    const ShowUserData = () => {
        if (userInfo) {
            return (
                <View style={styles.userInfo}>
                    <Image source={{ uri: userInfo.picture }}  style={styles.profilePic}/>
                    <Text style={{ color: "red" }}>로그인 됬습니다. {userInfo.name}</Text>
                    <Text>{userInfo.email}</Text>
                    <View>
                        <Button title="결제 하기"/>
                    </View>
                </View>
            );
        }
    };

    const LoginInputHandler = (key, value) => {
        setLoginInput(prevState => ({
            ...prevState,
            [key]: value,
        }));
    }
    const LoginHandler = () => {
        console.log(logininput)
    }

    return (
        <View style={styles.LoginView}>
            {accessToken && MyWallets()}
            {accessToken == null &&
            <>
            <HeaderLogo />
            <View style={{ flex: 1 }}>
                <ScreenTitle title="낭낭" content="암호화폐 지갑 통합 결제 플랫폼" />
            </View>
            <View style={{ flex: 1 }}>
                <InputText
                    name="이메일"
                    placeholder="이메일"
                    value={logininput.email}
                    onChangeText={text => {
                        LoginInputHandler('email', text)
                    }} />
                <InputText name="비밀번호" placeholder="비밀번호" />
                <View style={styles.Findpasswd}>
                    <Text>아이디 저장하기</Text>
                    <Text>비밀번호를 잊어버리셨나요?</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.ButtonView}>
                    <TouchableOpacity
                        style={styles.LoginButton}
                        onPress={LoginHandler}>
                        <Text style={styles.text}>로그인</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.LoginButton}
                        disabled={!request}
                        title={accessToken ? "Get User Data" : "Login"}
                        onPress={accessToken ? getUserData : ()=> {promptAsync({useProxy:true,showInRecents:true})}}>
                        <Image
                            style={{ width: 30, height: 30, marginRight: 10, }}
                            source={require('../assets/google.png')} />
                        <Text style={styles.text}>구글 로그인</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.SignUpLink}>
                    <Text>계정이 없으신가요?</Text>
                    <Link to={{screen:'Register'}}>회원가입</Link>
                </View>
            </View>
            </>}
        </View>
    );
};

const styles = StyleSheet.create({
    LoginView: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    Findpasswd: {
        marginHorizontal: 20,
        marginTop: 10,
        width: '70%',

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center'
    },
    ButtonView: {
        // paddinng:10,
        marginTop: 10,
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    LoginButton: {

        borderRadius: 10,
        backgroundColor: Colors.indigo500,

        width: '100%',
        height: 50,
        marginTop: 10,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        color: Colors.Incarnadine500
    },
    SignUpLink: {

        marginHorizontal: 20,
        marginTop: 10,
        width: '70%',

        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'flex-end',
    },

    profilePic:{
        width:50,
        height:50,
    },
    userInfo:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});
export default Login;