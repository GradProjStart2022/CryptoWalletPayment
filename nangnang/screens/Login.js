import React, { useState } from 'react';
import { Image,Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import HeaderLogo from '../components/HeaderLogo';
import InputText from '../components/InputText';
import ScreenTitle from '../components/ScreenTitle';

const Login = ({ navigation }) => {
    const [logininput, setLoginInput] = useState({
       email:"",
       password:""
    });

    const LoginInputHandler = (key, value)=>{
        // const {email, password} =e.target;
        setLoginInput(prevState =>({
            ...prevState,
            [key] :value,
        }));
        console.log(logininput.email, logininput.password)
    }

    const LoginHandler = ()=> {
        console.log(logininput)
    }
    return (
        <View style={{ flex: 1 }}>
            <HeaderLogo />
            <View style={{ flex: 1}}>
                <ScreenTitle title="낭낭" content="암호화폐 지갑 통합 결제 플랫폼" />
            </View>
            <View style={{ flex: 1 }}>

                <InputText 
                    name="이메일" 
                    placeholder="이메일" 
                    value={logininput.email} 
                    onChangeText={text=>{
                        LoginInputHandler('email',text)
                    }} />
                <InputText name="비밀번호" placeholder="비밀번호" />
                <View style={styles.Findpasswd}>
                    <Text>아이디 저장하기</Text>
                    <Text>비밀번호를 잊어버리셨나요?</Text>
                </View>
            </View>
            <View style={{flex:1}}>
                <View style={styles.ButtonView}>
                    <TouchableOpacity 
                        style={styles.LoginButton}
                        onPress={LoginHandler}>
                        <Text style={{color:"#FFEBB7"}}>로그인</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.LoginButton}>
                        <Image
                            style={{width:30,height:30,marginRight:10,}}
                            source={require('../assets/google.png')}/>
                        <Text style={{color:"#FFEBB7"}}>구글 로그인</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.SignUpLink}>
                    <Text>계정이 없으신가요?</Text>
                    <Text>회원가입</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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

        flexDirection:'row',
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