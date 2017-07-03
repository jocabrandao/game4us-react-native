/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Componente para renderizar um item de componentes agrupados 
 */

import React from 'react';
import { View } from 'react-native';

const ItemGroupSection = (props) => {
  const { containerStyle } = styles;

  return (
    <View style={[containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export default ItemGroupSection;
