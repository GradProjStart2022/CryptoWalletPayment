import React from 'react';
import {Text, View, StyleSheet,Image } from 'react-native';
import ScreenTitle from '../components/ScreenTitle';


import WalletModalButton from '../components/WalletModalButton';
const MyWallets = () => {
    return (
        <View style={styles.MyWalletsView}>
            <View style={{ flex: 1, alignItems:'center',justifyContent:'center' }}>
                <ScreenTitle title="내 지갑" />
            </View>
            <View style={styles.WalletBlockView}>
                <View style={styles.WalletBlock}>
                    <View style={styles.iconwrapper}>
                        <Image
                            style={styles.image}
                            source={require(`../assets/metamask.png`)} />
                    </View>
                    <Text style={{ color: '#243763' }}>MetaMask</Text>
                    <WalletModalButton title="MetaMask" content="지갑 주소 입력" />
                </View>
                <View style={styles.WalletBlock}>
                    <View style={styles.iconwrapper}>
                        <Image
                            style={styles.image}
                            source={require(`../assets/trustwallet.png`)} />
                    </View>
                    <Text style={{ color: '#243763' }}>TrustWallet</Text>
                    <WalletModalButton content="지갑 주소 입력" title="MetaMask"/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    MyWalletsView: {
        flex: 1,
    },
    WalletBlockView: {
        flex: 3,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    WalletBlock:{
        backgroundColor: '#fff',
        borderRadius: 10,

        // height: 220,
        width: '40%',
        alignItems: 'center',
        marginBottom:'5%',
    },
    iconwrapper:{
        margin: '10%',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#FF9F98',

        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width: '70%',
        height: '70%',
        borderRadius: 30
    }
})
export default MyWallets;