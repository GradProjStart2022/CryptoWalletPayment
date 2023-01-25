import React from 'react';
import { View,TextInput,Text,StyleSheet} from 'react-native';

const InputText = ({name, placeholder, secureTextEntry,value,onChangeText}) => {
    return (
        <View style={{alignItems:'center'}}>
            <View style={[styles.InputText]}>
                <Text style={styles.InputTitle}>{name}</Text>
                <TextInput 
                    style={styles.InputArea} 
                    placeholderTextColor="#A9A9AC" 
                    
                    autoCorrect={false}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    
                    value={value}
                    onChangeText={onChangeText}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    InputText:{

        width:'70%',
        alignItems:'flex-start',

        flexDirection:'column',
        justifyContent:'space-between',
        
        padding:10,
    },

    InputTitle:{
        color:'#FF6E31',
        fontWeight:'bold',
    },
    InputArea:{
        backgroundColor: '#fff',
        color: "#243763",  
        borderRadius: 10, 

        padding:10,
        width:'100%',
        height: 40,
        marginTop: 10,
    },
})

export default InputText;