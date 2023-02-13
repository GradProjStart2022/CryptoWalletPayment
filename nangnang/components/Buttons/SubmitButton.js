import React from 'react';
import {  Text,  StyleSheet, Pressable,  } from 'react-native';

import Colors from '../../constants/colors';

const SubmitButton = ({children}) => {
    return (
    <Pressable
        style={styles.button}>
        <Text style={styles.text}>{children}</Text>
    </Pressable>
    );
};

const styles = StyleSheet.create({
    button:{
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
    }
})

export default SubmitButton;