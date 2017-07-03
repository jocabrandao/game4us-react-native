/*!
 * Game4us
 * Copyright(c) 2017 João Carlos Brandão && Carlos Aiello 
 * MIT Licensed
 * 
 * Função para formatar moeda padrão R$
 */

export default function decimalPartNumber(valor) {
  const number = valor.toString();

  function fromatCurrency(decNumber) {
    let numberFormated = decNumber.toString();
       if (numberFormated.length > 12) {
         numberFormated = numberFormated.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}).([0-9]{3}$)/g,
        '.$1.$2.$3.$4');
      } else if (numberFormated.length > 9) {
        numberFormated = numberFormated.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}$)/g,
        '.$1.$2.$3');
      } else if (numberFormated.length > 6) {
        numberFormated = numberFormated.replace(/([0-9]{3}).([0-9]{3}$)/g, '.$1.$2');
      } else if (numberFormated.length > 3) {
        numberFormated = numberFormated.replace(/([0-9]{3}$)/g, '.$1');
      }
    return numberFormated;
  }

  function decimalNumber() {
    const newNumber = Math.trunc(number);
    return newNumber;
  }

  return fromatCurrency(decimalNumber());
}
