// ! telling typescript that expression in front of it will not return null
// ? telling typescript that expression in front of it is optional.

let o1 : {x:string|null} = {x:null}
let y = o1.x?.toUpperCase(); // Here toUpperCase() will only excute if o1.x is not undefined.
console.log(y);


// Nullish Coelescing
let userData = '';
let o = userData ?? 'DEFAULT'; // ?? checks for nulls or undefined only where as || check of falsy and '' is falsy.
