/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Componente para renderizar um agrupamento de componentes 
 */

import React from 'react';
import { View } from 'react-native';

const ItemGroup = (props) => {
  const { containerStyle } = styles;

  return (
    <View style={[containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 0.5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  }
};

export default ItemGroup;
