import React , {Component} from 'react'
import {View, Text, StyleSheet, Image} from  'react-native'
import {Feather} from '@expo/vector-icons'

class Footer extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Produtos Bela Vista - 2021</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height: 50,
    backgroundColor: '#606060',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text:{
    color: '#FFFF',
    fontWeight: 'bold'
  }
})

export default Footer;