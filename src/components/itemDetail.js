/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Componente para renderizar os detalhes da lista de produto 
 */

import React from 'react';
import { Text, View, Image } from 'react-native';
import ItemGroup from './itemGroup';
import ItemGroupSection from './itemGroupSection';
import PriceFormatter from '../components/priceFormatter';

const indicator = require('./img/disclosure-indicator.png');

const ItemDetail = ({ item }) => {
  const { nomeProduto, iconeProduto, precoProduto } = item;
  const {
    thumbnailContainerStyle,
    thumbnailStyle,
    productContentStyle,
    productStyle,
    productTextStyle,
    indicatorContentStyle,
    indicatorStyle,
    containerStyle,
    customPriceStyle
  } = styles;

  return (
    <ItemGroup style={containerStyle}>

      <ItemGroupSection style={{ height: 117 }}>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: iconeProduto }}
          />
        </View>

        <View style={productContentStyle}>
          <View style={productStyle}>
            <Text style={productTextStyle}>{nomeProduto}</Text>
            <PriceFormatter price={precoProduto} style={customPriceStyle} />
          </View>
        </View>

        <View style={indicatorContentStyle}>
          <Image style={indicatorStyle} source={indicator} />
        </View>
      </ItemGroupSection>

    </ItemGroup>
  );
};

const styles = {
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  indicatorContentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  indicatorStyle: {
    height: 15,
    width: 10
  },
  productContentStyle: {
    flex: 1,
    flexDirection: 'row',
    width: null,
    alignItems: 'flex-start',
  },
  productStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  productTextStyle: {
    fontSize: 14,
    fontWeight: '600'
  },
  containerStyle: {
      borderWidth: 0,
      borderRadius: 0,
      height: 117,
      borderColor: '#ddd',
      borderBottomWidth: 0.5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 0.5,
      elevation: 0,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5
    },
    customPriceStyle: {
      alignSelf: 'flex-start'
    }
};

export default ItemDetail;
