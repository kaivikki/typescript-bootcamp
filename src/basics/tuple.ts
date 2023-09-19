/**
 * Defination: Array like structure where each element represents
 * some property of a record.
 * 
 * 
 */

const drink = {
  color:'brown',
  carbonated: true,
  sugar : 40
}

// Above object representation as tuple ( Types order is important to not loose information).
// Defining type as array of order types example [string, boolean, number] makes this a tuple.
const pepsi : [string, boolean, number] = ['brown', true, 40];

// Type Alias
type Drink = [string, boolean, number];
const tea : Drink = ['brown', false, 0];