/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Função para renderizar um conteúdo se um valor de A for igual ao de B
 */

export default function renderIfEqual(valueA, valueB, content) {
  if (valueA === '' || valueB === '') {
    return null;
  } else if (valueA.toUpperCase() === valueB.toUpperCase()) {
    return content;
  }
  return null;
}
