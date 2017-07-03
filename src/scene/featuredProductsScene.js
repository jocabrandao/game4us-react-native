/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Sena para montar a tela de ofertas do app.
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import SearchHeader from '../components/searchHeader';
import ItemList from '../components/itemList';

class FeaturedProductsScene extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchHeader />
        <ItemList />
      </View>
    );
  }
}

export default FeaturedProductsScene;
