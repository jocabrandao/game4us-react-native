/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Componente que implementa um mecanísmo de busca responsável por 
 * passar para a ação de busca o conteúdo à ser procurado.
 */

import React, { Component } from 'react';
import { View, KeyboardAvoidingView, TextInput, Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';

class SearchField extends Component {

  state = {
    searchString: ''
  };

  onSubmitEditing() {
    Keyboard.dismiss();
    Actions.searchResult({ searchString: this.state.searchString });
  }

  render() {
    console.log(this.state);

    return (
      <KeyboardAvoidingView behavior='padding'>
        <View style={styles.searchSection} >
          <TextInput
            style={styles.searchInputStyle}
            placeholder="Buscar jogos e consoles"
            onChangeText={(searchString) => { this.setState({ searchString }); }}
            onSubmitEditing={this.onSubmitEditing.bind(this)}
            underlineColorAndroid="transparent"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}


const styles = {
  searchSection: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    marginLeft: 5,
    marginRight: 5,
  },
  searchInputStyle: {
    padding: 10,
    color: '#424242',
    fontSize: 18
  }
};

export default SearchField;
