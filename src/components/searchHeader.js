/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Componente responsável por disponibilizar na tela o componente de busca customizado
 * com a imagem de fundo.
 */

import React from 'react';
import { Image, View } from 'react-native';
import SearchField from './searchField';

const searchBkg = require('./img/searchBackground.png');
const logo = require('./img/GameZ4US.png');

const SearchHeader = () => {
  const { imageBackgroundStyle,
          headerContainerStyle,
          searchContainerStyle,
          logoContainerStyle,
          searchFieldContainerStyle
        } = styles;

  return (
    <Image style={imageBackgroundStyle} source={searchBkg} >
      <View style={headerContainerStyle}>

        <View style={searchContainerStyle}>

          <View style={logoContainerStyle}>
            <Image source={logo} />
          </View>

          <View style={searchFieldContainerStyle}>
            <SearchField />
          </View>

        </View>
      </View>
    </Image>
  );
};

const styles = {
  imageBackgroundStyle: {
    height: 160,
    width: null
  },
  headerContainerStyle: {
    flex: 1,
    flexDirection: 'row'
  },
  searchContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  logoContainerStyle: {
    padding: 30,
    alignItems: 'center'
  },
  searchFieldContainerStyle: {
    padding: 10
  }
};

export default SearchHeader;
