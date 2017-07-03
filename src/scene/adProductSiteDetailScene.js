
/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Sena para apresentar o anúncio do parceiro dentro do app.
 */

import React, { Component } from 'react';
import { WebView } from 'react-native';

class AdProductSiteDetailScene extends Component {
  render() {
  console.log(this.props);

    return (
      <WebView
        source={{ uri: this.props.data }}
        style={{ marginTop: -11 }}
        automaticallyAdjustContentInserts
      />
    );
  }
}

export default AdProductSiteDetailScene;
