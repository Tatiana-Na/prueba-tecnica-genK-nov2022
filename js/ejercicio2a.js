const arr1 = [
    [1, 3, 5],
    [7, 9, 7],
    [5, 3, 1],
    ];
  const arr2 = [
    [2, 4, 6],
    [8, 10, 8],
    [6, 4, 2],
    ];
  
  const fil_arr1 = arr1.length;
  const col_arr1 = arr1[0].length;
  const fil_arr2 = arr2.length;
  const col_arr2 = arr2[0].length;
  
  
  const result = new Array(fil_arr1);
  for (x=0; x<result.length;x++)
      result[x] = new Array(col_arr2).fill(0);
  
  for (x=0; x < result.length; x++) {
      for (y=0; y < result[x].length; y++) {                                
          for (z=0; z<col_arr1; z++) {
              result [x][y] = result [x][y] + arr1[x][z]*arr2[z][y]; 
          }
      }
  }
  console.log(result)