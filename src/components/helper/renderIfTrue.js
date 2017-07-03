/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Função para renderizar um conteúdo se uma condição for verdadeira
 */

export default function renderIfTrue(condition, content) {
  if (condition) {
    return content;
  }
    return null;
}
