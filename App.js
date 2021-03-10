import React , {Component} from 'react'
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native'
import Footer from './src/components/Footer'
import Header from './src/components/Header'
import Pessoa from './src/components/Produto'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      produto:[
        { id: '1',nome: 'Arroz',valor: 20,marca: 'Vasconcelos',quantidade: 12,referencia: '001', desconto: '10%', promocao: 'Leve 5 pague 4'},
        { id: '2',nome: 'Feijão',valor: 10,marca: 'Vasconcelos',quantidade: 15,referencia: '002', desconto: '5%', promocao: 'Leve 6 pague 5' },
        { id: '3',nome: 'Detergente',valor: 1.99,marca: 'Ypê',quantidade: 100,referencia: '003', desconto: '20%', promocao: 'Leve 10 pague 9' },
        { id: '4',nome: 'Macarrão',valor: 4.99,marca: 'Amália',quantidade: 50,referencia: '004', desconto: '5%', promocao: 'Leve 4 pague 3' },
        { id: '5',nome: 'Bolacha',valor: 3.99,marca: 'Mabel',quantidade: 100,referencia: '005', desconto: '25%', promocao: 'Leve 2 pague 1' },
        { id: '6',nome: 'Achocolatado',valor: 9.99,marca: 'Nescau',quantidade: 70,referencia: '006', desconto: '30%', promocao: 'Leve 3 pague 1' },
      ]
    }
  }
  render(){
    return(
      <>
      <Header />
    
      <View style={styles.container}>
       <Text style={styles.titulo}>Lista de Produtos</Text>
        <View>
          
          <FlatList 
            data={this.state.produto}
            keyExtractor={(item)=> item.id}
            renderItem={({item})=> 
              <Pessoa 
                nome={item.nome}  
                valor={item.valor}  
                marca={item.marca}  
                quantidade={item.quantidade}  
                desconto={item.desconto}
                promocao={item.promocao}  
                referencia={item.referencia}  
                
              />}
              showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    
      <Footer />
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  titulo:{
    fontSize: 30,
    color: '#1DA1F2',
    fontWeight: 'bold',
    margin: 5
  }

})

export default App