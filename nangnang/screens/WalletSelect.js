import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import ScreenTitle from '../components/ScreenTitle';


import WalletModalButton from '../components/WalletModalButton';
const WalletSelect = () => {
    return (
        <View style={styles.WalletSelectView}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ScreenTitle title="지갑 선택" />
            </View>
            <View style={styles.WalletBlockView}>
                <FlatList
                    data={[{ text: "metamask", key: 1},{text:"trustwallet",key:2}]}
                    renderItem={(itemData) => {
                        return (
                            <View style={styles.WalletBlock}>
                                <View style={styles.iconwrapper}>
                                    <Image
                                        style={styles.image}
                                        source={require(`../assets/trustwallet.png`)} />
                                </View>
                                <Text style={{ color: '#243763' }}>{itemData.item}</Text>
                                <WalletModalButton content="지갑 주소 입력" title={itemData.item} />
                            </View>
                        )
                    }}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    WalletSelectView: {
        flex: 1,
    },
    WalletBlockView: {
        flex: 3,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    WalletBlock: {
        backgroundColor: '#fff',
        borderRadius: 10,

        // height: 220,
        width: '40%',
        alignItems: 'center',
        marginBottom: '5%',
    },
    iconwrapper: {
        margin: '10%',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#FF9F98',

        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '70%',
        height: '70%',
        borderRadius: 30
    }
})
export default WalletSelect;