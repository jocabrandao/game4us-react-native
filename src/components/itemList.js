/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Componente para listar os produtos com base na consulta do serviço disponível que traz resultado de
 * Games e Consoles dado uma palavra chave. De posse dos dados obtidos, renderiza uma lista com os produtos
 * utilizando os componentes auxiliares para montar a lista.
 */

// Cria o componente
import React, { Component } from 'react';
import { ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import ItemDetail from './itemDetail';

// Cria o componente customizado 
class ItemList extends Component {

  // Define os estados que o componente assume
  state = { itens: [] };

  // Método chamado quando o componente será montado
  componentWillMount() {
      // Busca do serviço as informações que serão utilizadas no componente.
      // Quando recebe o resultado, coloca ele dentro do array 'itens'
      let searchText = 'jogos e consoles';

      // Caso tenha sido passado para este componente uma string para busca, considera e não busca o default
      if (this.props.searchString && this.props.searchString !== '') {
        searchText = this.props.searchString;
      }

      // Executa a busca
      axios.get(`https://search-games.herokuapp.com/todos/nome/${searchText}`)
      .then(response => this.setState({ itens: response.data }));
  }

  // Quando uma linha de produto for selecionada, chama a ação que detalhará o produto
  onRowPress(item) {
    Actions.productDetail(item);
  }

  // Método auxiliar para renderizar os itens de uma lista
  renderAllItens() {
    return this.state.itens.map((item, index) =>
      <TouchableWithoutFeedback key={index} onPress={this.onRowPress.bind(this, item)}>
        <View>
          <ItemDetail item={item} />
        </View>
      </TouchableWithoutFeedback>
    );
  }

  // Renderiza o componente
  render() {
    console.log(this.state);

    return (
      <ScrollView>
        { this.renderAllItens() }
      </ScrollView>
    );
  }
}

// Torna o componente disponível para outras partes da aplicação
export default ItemList;
