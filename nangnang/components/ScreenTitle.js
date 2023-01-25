import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const ScreenTitle = (props) => {
    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
         <Text style={styles.content}>{props.content}</Text>
        </View>
    );
};

const styles =StyleSheet.create({
    title:{
        color: '#FF6E31',
        fontSize: 40,
        // fontWeight:'bold',
        marginTop: '10%',
        textAlign: 'center',
    },
    content:{
        color:'#243763',
        
        textAlign:'center',
        marginTop: '5%',
    },
})

export default ScreenTitle;