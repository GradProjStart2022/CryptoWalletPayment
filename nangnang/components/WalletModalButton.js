import React, { useEffect, useState } from 'react';
import { View, Modal, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import axios from 'axios';
import EtherScanAPI from '../API/EtherScanAPI';

const WalletModalButton = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");
    const [currnetPrice, setCurrentPrice] = useState(0);


    // @@@@@ State 공부해서 최적화 시켜야한다.
    const [Ether, setEther] = useState(0);
    const [Dollar, setDollar] = useState(0);

    const NowBalance = async () => {
        const address = walletAddress;
        console.log(address);
        try {
            const response = await EtherScanAPI.get(`?module=account&action=balance&address=${address}&tag=latest&apikey=CDFTCSDIJ4HNYU41CJYRP2I3SSCNJ7PGYD`)
            const Balance = response.data.result
            setEther(Balance *(Math.pow(10, -18)))
        } catch (error) {
            Error(error)
        }
    }

    const CoinValue = async ()=>{
        try{
            const response = await axios.get(`https://api.upbit.com/v1/ticker?markets=USDT-ETH`,{
                headers:{
                    Accept: 'application/json',
                },
            })
            const currnetPrice = response.data[0].trade_price
            setCurrentPrice(currnetPrice);
            setDollar((Ether * currnetPrice).toFixed(3))
        }catch(error){
            Error(error)
        }
    }
    return (
        <View style={styles.WalletModalButtonView}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={isModalVisible}>
                <View style={styles.centerdView}>
                    <View style={styles.modalView}>
                        <Text style={{ color: '#FF6E31', fontSize: 20 }}>{props.title}</Text>
                        <Text style={{ color: "#243763" }}>사용자님의 자금</Text>
                        {/* <Text style={{ color: "#243763" }}>{Balance} : 웨이</Text> */}
                        <Text style={{ color: "#243763" }}>{Ether} : 이더리움</Text>
                        <Text style={{ color: "#243763" }}>{Dollar} : 달러</Text>
                        <TextInput
                            style={styles.inputaddress}
                            placeholder="지갑주소"
                            placeholderTextColor="#A9A9AC"
                            value={walletAddress}
                            onChangeText={(e) => setWalletAddress(e)} />
                        <TouchableOpacity
                            style={styles.modalbutton}
                            onPress={NowBalance}>
                            <Text style={{ color: '#243763', fontSize:10,alignSelf: 'center' }}>입력</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalbutton}
                            onPress={()=>{setWalletAddress(''),setEther(0),setDollar(0)}}>
                            <Text style={{ color: '#243763', fontSize:10,alignSelf: 'center' }}>초기화</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalbutton}
                            onPress={() => { setModalVisible(!isModalVisible) }}>
                            <Text style={{ color: '#243763', fontSize: 10, alignSelf: 'center' }}>닫기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#243763', fontSize: 10, alignSelf: 'center' }}
                        onPress={() => { setModalVisible(!isModalVisible) }}>{props.content}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    centerdView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        height:'60%',
        margin: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    button: {
        borderColor: '#243763',
        borderRadius: 20,
        borderWidth: 1,

        alignSelf: 'center',
        margin: '10%',
        marginBottom: '10%',
        padding: 5,
        width: '100%',
    },
    modalbutton:{
        borderColor: '#243763',
        borderRadius: 20,
        borderWidth: 1,

        alignSelf: 'center',
        // margin: '10%',
        padding: 5,
        width: 100,
    },
    inputaddress: {
        backgroundColor: '#fff',
        color: "#243763",
        borderRadius: 10,
        width: 200,
        height: 40,
        // marginTop: 10,
        padding: 10,
    }

})
export default WalletModalButton;