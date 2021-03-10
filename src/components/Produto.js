import React , {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from  'react-native'

class Produto extends Component{
  render(){
    return(
      <View  style={styles.container}>
        <Text style={styles.produtoNome} > {this.props.nome} </Text>

        <View style={styles.directionColum}>
          <Text style={styles.textDecoration}>Valor: {this.props.valor} </Text>
          <Text style={styles.textDecoration}>Marca: {this.props.marca} </Text>
        </View>

        <View style={styles.directionColum}>
          <Text style={styles.textDecoration}>Quantidade {this.props.quantidade} </Text>
          <Text style={styles.textDecoration}>Referência {this.props.referencia} </Text>
        </View>

        <View style={styles.directionColum}>
          <TouchableOpacity style={styles.buttonDescDecoration}><Text style={styles.textDecorationButton}>{this.props.desconto} de desconto</Text></TouchableOpacity>
          <TouchableOpacity style={styles.buttonPromDecoration}><Text style={styles.textDecorationButton}>{this.props.promocao}</Text></TouchableOpacity>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#C2C2C2',
    width: 400,
    margin: 5,
    paddingHorizontal: 2
  },
  produtoNome:{
    color: '#ffff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  directionColum:{
    flexDirection: 'row',
    width: 250,
    margin: 5,
    paddingLeft: 5,
    justifyContent: 'space-between'
  },
  textDecoration:{
    color: '#FFF',
  },
  textDecorationButton:{
    color: '#FFF',
    fontWeight: 'bold'
  },
  buttonDescDecoration:{
    backgroundColor: '#75BB57',
    width: 120,
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonPromDecoration:{
    backgroundColor: '#FF8351',
    width: 120,
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

})

export default Produto;