import React , {Component} from 'react'
import {View, Text, StyleSheet, Image} from  'react-native'
import {Feather} from '@expo/vector-icons'

class Header extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Feather style={styles.icon} size={35} color='#FFF' name="shopping-cart" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height: 50,
    backgroundColor: '#3D8AF7',
    justifyContent: 'center'
  },
  icon:{
    padding: 10
  }
})

export default Header;