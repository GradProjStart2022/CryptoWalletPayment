import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, FlatList,TouchableOpacity } from 'react-native';
import ScreenTitle from '../components/ScreenTitle';
import WalletInputModal from '../components/WalletInputModal';

import Colors from '../constants/colors';

const formatData = (data, numColumns) =>{

    const numberOfFullRows = Math.floor(data.length/numColumns)

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while(numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0){
        data.push({id: `blank-${numberOfElementsLastRow}`, empty: true})
        numberOfElementsLastRow = numberOfElementsLastRow + 1;
    }
    return data;
}

const MyWallets = () => {
    const [modalIsVisible, setModalIsVisible] = useState(false); 
    const [wallets, setWallets] = useState([
        {
            id: 1,
            wallet: "metamask",
            imageURL: require(`../assets/metamask.png`)

        },
        {
            id: 2,
            wallet: "trustwallet",
            imageURL: require(`../assets/trustwallet.png`)
        },
        {
            id: 3,
            wallet: "metamask",
            imageURL: require(`../assets/metamask.png`)

        },
        {
            id: 4,
            wallet: "trustwallet",
            imageURL: require(`../assets/trustwallet.png`)
        },
        {
            id: 5,
            wallet: "metamask",
            imageURL: require(`../assets/metamask.png`)

        },
        {
            id: 6,
            wallet: "trustwallet",
            imageURL: require(`../assets/trustwallet.png`)
        },
        {
            id: 7,
            wallet: "metamask",
            imageURL: require(`../assets/metamask.png`)

        },
        {
            id: 8,
            wallet: "trustwallet",
            imageURL: require(`../assets/trustwallet.png`)
        },
        {
            id: 9,
            wallet: "trustwallet",
            imageURL: require(`../assets/trustwallet.png`)
        }
    ])

    function CloseModalHandler(){
        setModalIsVisible(false);
    }

    return (
        <View style={styles.MyWalletsView}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ScreenTitle title="내 지갑" />
            </View>
            <View style={styles.WalletBlockView}>
                <FlatList
                    numColumns={2}
                    data={formatData(wallets,2)}
                    renderItem={({ item, index }) => {
                        if (item.empty === true){
                            return <View style={[styles.WalletBlock, styles.WalletBlockInvisible]}/>
                        }
                        return (
                            <View style={styles.WalletBlock}>
                                <View style={styles.iconwrapper}>
                                    <Image
                                        style={styles.image}
                                        source={require(`../assets/trustwallet.png`)} />
                                </View>
                                <Text style={styles.indigo500}>{item.wallet}</Text>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={[styles.indigo500,{ fontSize: 10, alignSelf: 'center' }]}
                                        onPress={()=>setModalIsVisible(true)}>지갑 주소 입력</Text>
                                </TouchableOpacity>
                                <WalletInputModal
                                    title={item.wallet}
                                    visible={modalIsVisible} 
                                    onCancel={CloseModalHandler}/>
                            </View>
                        )
                    }}
                    keyExtractor={item => item.id}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    MyWalletsView: {
        flex: 1,
    },
    WalletBlockView: {
        flex: 4,
        flexDirection: 'row',
        // justifyContent: 'space-around',
    },
    WalletBlockInvisible:{
        backgroundColor:"transparent"
    },
    WalletBlock: {
        flex:1,
        backgroundColor: '#fff',
        borderRadius: 10,

        width: '40%',
        alignItems: 'center',

        margin:10,
    },
    iconwrapper: {
        margin: '10%',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: Colors.orange500,

        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '70%',
        height: '70%',
        borderRadius: 30
    },
    button: {
        borderColor: Colors.indigo500,
        borderRadius: 20,
        borderWidth: 1,

        alignSelf: 'center',
        margin: '10%',
        marginBottom: '10%',
        paddingVertical: 5,
        paddingHorizontal: 10,
        // width: '100%',
    },
    text:{
        colors: Colors.indigo500,
    }
})
export default MyWallets;