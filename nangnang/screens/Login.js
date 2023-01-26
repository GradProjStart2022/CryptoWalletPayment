import React, { useState,useEffect } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google'

import HeaderLogo from '../components/HeaderLogo';
import InputText from '../components/InputText';
import ScreenTitle from '../components/ScreenTitle';


// web : 185496097106-sp0mrog1pvfhkg0kijstue30hf0ugtf6.apps.googleusercontent.com
// IOS : 185496097106-9losums1qg0iljj25kgt1krhcsp4h5eg.apps.googleusercontent.com
// Android : 185496097106-35agk1e07b0h6t2egjm0sdh88odo1u5k.apps.googleusercontent.com

WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }) => {

    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState(null);
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: "185496097106-sp0mrog1pvfhkg0kijstue30hf0ugtf6.apps.googleusercontent.com",
        iosClientId: "185496097106-9losums1qg0iljj25kgt1krhcsp4h5eg.apps.googleusercontent.com",
        androidClientId: "185496097106-35agk1e07b0h6t2egjm0sdh88odo1u5k.apps.googleusercontent.com"
    });

    useEffect(() => {
        if (response?.type === "success") { //response의 타입이 success 이면
            setAccessToken(response.authentication.accessToken);
            accessToken && fetchUserInfo(); // accessToken이 있으면 fetchUserInfo를 실행시킨다.
        }
    }, [response, accessToken])// response값과 accessToken이 바뀔때만 실행

    const fetchUserInfo = async () => {
        let response = await fetch(" https://www.googleapis.com/userinfo/v2/me", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        // 
        const useInfo = await response.json(); //response객체를 json() 형태로 받아온다는것
        setUser(useInfo);
    }

    const ShowUserInfo = () => {
        if (user) {
            return (
                <View style={{flex:1, alignItems:'center'}}>
                    <Text  style={{color:"red"}}>로그인 됬습니다.</Text>
                </View>
            )
        }
    }

    const [logininput, setLoginInput] = useState({
        email: "",
        password: ""
    });

    const LoginInputHandler = (key, value) => {
        // const {email, password} =e.target;
        setLoginInput(prevState => ({
            ...prevState,
            [key]: value,
        }));
        console.log(logininput.email, logininput.password)
    }

    const LoginHandler = () => {
        console.log(logininput)
    }
    return (
        <View style={styles.LoginView}>
            {user && <ShowUserInfo />}
            {user === null &&
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
                                <Text style={{ color: "#FFEBB7" }}>로그인</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.LoginButton}
                                disabled={!request}
                                onPress={()=>{promptAsync()}}>
                                <Image
                                    style={{ width: 30, height: 30, marginRight: 10, }}
                                    source={require('../assets/google.png')} />
                                <Text style={{ color: "#FFEBB7" }}>구글 로그인</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.SignUpLink}>
                            <Text>계정이 없으신가요?</Text>
                            <Text>회원가입</Text>
                        </View>
                    </View>
                </>}
        </View>
    );
};

const styles = StyleSheet.create({
    LoginView:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
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
        backgroundColor: '#243763',

        width: '100%',
        height: 50,
        marginTop: 10,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    SignUpLink: {

        marginHorizontal: 20,
        marginTop: 10,
        width: '70%',

        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'flex-end',
    }
});
export default Login;