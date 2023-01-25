import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

function HeaderLogo() {
  return (
    <View>
        <Text style={styles.headerlogo}>NANG NANG</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerlogo:{
        color:'#FF6E31',
        fontSize:10,
        fontWeight:'bold',

        alignSelf:'flex-end', 
        padding: 30,
      },
})
export default HeaderLogo