/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Função para pegar a parte numeral de um valor em R$
 */

export default function numeralFormatter(valor) {
  const number = valor.toString();

  function fractionalNumber() {
    const newNumber = (number % 1).toFixed(2).substring(2);
    return newNumber;
  }

  return fractionalNumber();
}
