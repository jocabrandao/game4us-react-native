/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Sena para montar a tela de resultado de busca do app.
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import ItemList from '../components/itemList';

class SearchResultScene extends Component {
  render() {
    return (
     <View style={{ flex: 1 }}>
        <ItemList searchString={this.props.searchString} />
      </View>
      );
  }
}

export default SearchResultScene;
