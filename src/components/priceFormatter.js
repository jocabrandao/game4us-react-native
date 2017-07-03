/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Componente para arrumar o preço do produto da forma como ele será exibido na interface
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import decimalPartNumber from './helper/decimalPartNumber';
import fractionalPartNumber from './helper/fractionalPartNumber';

class PriceFormatter extends Component {
  render() {
    const {
      productPriceContainerStyle,
      productPriceStyle,
      productCentsAndCurrencyContainerStyle,
      productCentsPriceStyle,
      productCurrencyPriceStyle
    } = styles;

    return (
      <View style={[productPriceContainerStyle, this.props.style]}>
        <Text style={productPriceStyle}>{decimalPartNumber(this.props.price)}</Text>
        <View style={productCentsAndCurrencyContainerStyle}>
          <Text style={productCentsPriceStyle}>,{fractionalPartNumber(this.props.price)}</Text>
          <Text style={productCurrencyPriceStyle}>REAIS</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  productPriceContainerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    alignSelf: 'center'
  },
  productPriceStyle: {
    alignSelf: 'center',
    color: '#4990E2',
    fontSize: 34,
    fontWeight: '500'
  },
  productCentsAndCurrencyContainerStyle: {
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: 5
  },
  productCentsPriceStyle: {
    alignSelf: 'flex-start',
    color: '#4990E2',
    fontSize: 12
  },
  productCurrencyPriceStyle: {
    alignSelf: 'flex-start',
    color: '#4990E2',
    fontSize: 10
  }
};

export default PriceFormatter;
