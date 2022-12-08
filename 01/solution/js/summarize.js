"use strict";

function summarize(...numbers) {
  let validNumbers = numbers.filter((elem) => Number.isInteger(elem));
  validNumbers = validNumbers.map((x) => BigInt(x));
  let result = validNumbers.reduce((a, b) => a + b);

  return result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER
    ? result
    : Number(result);
}


export default summarize;

/* ## 1. feladat
console.log(summarize(10 ** 45, 22, 45.2));
console.log(summarize(10 ** 4, 22, 45.2));
- A `01/solution/js/summarize.js` fájlban dolgozz!
- Készíts egy függvényt `summarize` néven!
- Ez a paraméterként kapott tetszőleges darabszámú, tetszőleges értékű egész számot összeadja, és visszatér az összeadás végeredményével. 
- A paraméterként kapott értékek egyszerű number típusúak legyenek! 
- Amennyiben bármelyik paraméter értéke vagy a részeredmény meghaladja a biztonságos tartományt, automatikusan konvertáljad
`BigInt`-be, és természetesen a visszatérési érték is `BigInt` típusú legyen!
*/





// export default summarize;
