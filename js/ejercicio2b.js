'use strict';

///Convierte el array result en un array de strings con números de 3 cifras y completando con ceros a la izquierda los números que tengan menos de 3 cifras.

const result = [
    [56, 54, 40],
    [128, 146, 128],
    [40, 44, 56],
    ];
  
  const resultToString = [].concat(...result);
  
  
  resultToString.sort((a,b) => {
  if (a > b) {
    return 1 
  }  
  if ( b > a) {
    return -1
  }
  return 0
  })
  console.log(resultToString)