/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Definição das rotas de acesso às senas.
 */

import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import FeaturedProductsScene from './scene/featuredProductsScene';
import SearchResultScene from './scene/searchResultScene';
import ProductDetailScene from './scene/productDetailScene';
import AdProductSiteDetailScene from './scene/adProductSiteDetailScene';

const RouterComponent = () => {
  const navigationBarBackgroundImage = require('./components/img/searchBackgroundResult.png');
  const backButtonImage = require('./components/img/back-button.png');

  const {
    sceneStyle,
    navigationBarStyle,
    navigationBarBackgroundImageStyle,
    titleStyle
  } = styles;

  return (
    <Router>
      <Scene key="main">
        <Scene
          key="featured"
          component={FeaturedProductsScene}
          title="Produtos em Destaque"
          hideNavBar
          initial
        />

        <Scene
          sceneStyle={sceneStyle}
          key="searchResult"
          component={SearchResultScene}
          navigationBarStyle={navigationBarStyle}
          navigationBarBackgroundImage={navigationBarBackgroundImage}
          navigationBarBackgroundImageStyle={navigationBarBackgroundImageStyle}
          title="Busca de Produto"
          titleStyle={titleStyle}
          backButtonImage={backButtonImage}
          hideNavBar={false}
        />

        <Scene
          sceneStyle={sceneStyle}
          key="productDetail"
          component={ProductDetailScene}
          navigationBarStyle={navigationBarStyle}
          navigationBarBackgroundImage={navigationBarBackgroundImage}
          navigationBarBackgroundImageStyle={navigationBarBackgroundImageStyle}
          title="Detalhe do Produto"
          titleStyle={titleStyle}
          backButtonImage={backButtonImage}
          hideNavBar={false}
        />

        <Scene
          sceneStyle={sceneStyle}
          key="adProductSite"
          component={AdProductSiteDetailScene}
          navigationBarStyle={navigationBarStyle}
          navigationBarBackgroundImage={navigationBarBackgroundImage}
          navigationBarBackgroundImageStyle={navigationBarBackgroundImageStyle}
          title="Anúncio do Produto"
          titleStyle={titleStyle}
          backButtonImage={backButtonImage}
          hideNavBar={false}
        />
      </Scene>
    </Router>
  );
};

const styles = {
  sceneStyle: {
    paddingTop: 65
  },
  navigationBarStyle: {
    backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    flexDirection: 'row'
  },
  navigationBarBackgroundImageStyle: {
    flex: 1
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#fff'
  }
};

export default RouterComponent;
