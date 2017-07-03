/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Sena para montar a tela de detalhe do anúncio do app.
 */

import React, { Component } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../components/button';
import renderIfEqual from '../components/helper/renderIfEqual';
import renderIfTrue from '../components/helper/renderIfTrue';
import PriceFormatter from '../components/priceFormatter';

const logoMercadoLivre = require('../components/img/logo-mercadoLivre.png');
const logoBuscape = require('../components/img/logo-buscape.png');

class ProductDetailScene extends Component {

  handleClick = () => {
    Linking.canOpenURL(this.props.linkLoja).then(supported => {
      if (supported) {
        // Abre o link em um navegador externo ao app
        //Linking.openURL(this.props.linkLoja);

        // Abre o link em um navegador interno no app
        Actions.adProductSite(this.props.linkLoja);
      } else {
        console.log(`Não é possível abrir a URI: ${this.props.linkLoja}`);
      }
    });
  };

  render() {
    const {
      productDetailGroupContainerStyle,
      productImageContainerStyle,
      productImageStyle,
      productDetailContainerStyle,
      productTitleStyle,
      advertiserSiteContainerStyle,
      advertiserLogoStyle,
      showAdContainerStyle } = styles;

    return (
      <View style={productDetailGroupContainerStyle}>

        <View style={productImageContainerStyle}>
          <Image
            style={productImageStyle}
            source={{ uri: this.props.iconeProduto }}
          />
        </View>

        <View style={productDetailContainerStyle}>
          <Text style={productTitleStyle}>{this.props.nomeProduto}</Text>
          <PriceFormatter price={this.props.precoProduto} />
        </View>

        <View style={advertiserSiteContainerStyle}>

          <View style={{ alignSelf: 'center' }}>
            {renderIfTrue(this.props.classificacao === 0, 
              <Image source={require('../components/img/indefinido.png')} /> 
            )}

            {renderIfTrue(this.props.classificacao === 1, 
              <Image source={require('../components/img/bronze.png')} /> 
            )}

            {renderIfTrue(this.props.classificacao === 2, 
              <Image source={require('../components/img/prata.png')} /> 
            )}

            {renderIfTrue((this.props.classificacao === 3 || this.props.classificacao === 4), 
              <Image source={require('../components/img/ouro.png')} /> 
            )}
          </View>

          <View style={{ alignSelf: 'center' }}>
            {renderIfEqual(this.props.origem, 'MercadoLivre',
              <Image
                style={advertiserLogoStyle}
                source={logoMercadoLivre}
              />)
            }
            {renderIfEqual(this.props.origem, 'Buscapé',
              <Image
                style={advertiserLogoStyle}
                source={logoBuscape}
              />)
            }
          </View>
        </View>

        <View style={showAdContainerStyle}>
          <Button onPress={this.handleClick}>VER ANÚNCIO</Button>
        </View>

      </View>
    );
  }
}

const styles = {
  productDetailGroupContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  productImageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0
  },
  productImageStyle: {
    width: 150,
    height: 150
  },
  productDetailContainerStyle: {
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center'
  },
  productTitleStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#4A4A4A',
    fontSize: 20,
    fontWeight: '400'
  },
  productRatingStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#4A4A4A',
    fontSize: 18
  },
  advertiserSiteContainerStyle: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    position: 'relative',
    alignSelf: 'center'
  },
  advertiserLogoStyle: { },
  showAdContainerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    marginBottom: 40,
    marginLeft: 60,
    marginRight: 60
  }
};
export default ProductDetailScene;
