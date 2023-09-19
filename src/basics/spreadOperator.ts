// Spread Operator on Arrays
const a1 = ['Vikram','Arora']
const a1Plus = [...a1,'Kaira']


// Spread Operator on Objects
const s1 = {name: 'Vikram',age: '39'}
const s1Copy = {...s1};

// Rest Parameters ( Method to add numbers)
const addNumbers = (...numbers:number[]):number=>{
  return numbers.reduce((currentResult,currentValue)=>{
      return currentResult + currentValue
  }, 0);
}
