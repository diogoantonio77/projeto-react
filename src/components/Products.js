import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Products extends Component {
  render() {
    return (
      <View style={styles.productsInfo}>
        <View>
          <Image
            style={styles.productImage}
            source={{ uri: this.props.data.image }}
          />
        </View>

        <View style={styles.productsDetails}>
          <Text style={{fontWeight: 'bold'}}>{this.props.data.description}</Text>

          <Text style={styles.productCategory}>{this.props.data.category}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productsInfo: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10,
    elevation: 8,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 2
  },
  productsDetails: {
    marginLeft: 40,
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  productCategory: {
    backgroundColor: '#ef476f',
    width: 100,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    borderRadius: 2
  }
});

