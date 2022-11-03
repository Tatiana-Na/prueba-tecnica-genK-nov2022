'use strict';

///Convierte el array result en un array de strings con números de 3 cifras y completando con ceros a la izquierda los números que tengan menos de 3 cifras.

const result = [
    [56, 54, 40],
    [128, 146, 128],
    [40, 44, 56],
    ];
  
  const arrayString= result.toString();
  let num = 3
  console.log('56'.padStart(num, '0'));
  console.log('54'.padStart(num, '0'));
  console.log('40'.padStart(num, '0'));
  console.log('128'.padStart(num, '0'));
  console.log('146'.padStart(num, '0'));


  /* const result = [
  [56, 54, 40],
  [128, 146, 128],
  [40, 44, 56],
  ];

const arrayString= result.toString();

const newArray = Array.from(
        { length: 1 },
        (_, i) => ''.padStart(i % 6 + 1, '0') + arrayString + (i)
    ); 

console.log(newArray);
*/




  