import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import api from './src/services/api';
import Products from './src/components/Products';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    const response = await api.get('items');
    this.setState({
      products: response.data
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.products}
          keyExtractor={item => item.id.toString()}
          renderItem={ ({item}) => <Products data={item} /> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center'
    
  },
});
