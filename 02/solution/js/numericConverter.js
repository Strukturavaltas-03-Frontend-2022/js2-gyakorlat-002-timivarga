"use strict";


function numericConverter(num) {
  const result = {
    binary: num.toString(2),
    octal: num.toString(8),
    hexa: num.toString(16),
  };
  return result;
}


export default numericConverter;

/*
console.log(numericConverter(55));
console.log(numericConverter(10 ** 3));
## 2. feladat
- A `02/solution/js/numericConverter.js` fájlban dolgozz!
- Készíts egy függvényt `numericConverter` néven!
- Ez a paraméterként megadott tízes számrendszerbeli számot átkonvertálja kettes, nyolcas és tizenhatos
számrendszerbe is.
- Ezeket az értékeket egy objektumban add vissza. A property-k neve legyen: binary, octal, hexa.
*/