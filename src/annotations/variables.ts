// :number is type annotation of type number.
let apples: number = 5;

//string annotation type
let speed: string = '';

// boolean annonations type
let hasName: boolean=true;

// null annotations type
let nothingMuch: null = null;

// undefined annotation type
let nothing: undefined=undefined;

// object annotation type
let now: Date = new Date();

// Array Annotation Type
let colors: string[] = [''];

// Class Annotation Type
// class Car{}
// let car: Car = new Car();

// Object Literal annotation types
// Only thing that can be assigned to point is a object with two properties
// x and y which are both number.
let point: {x:number;y:number} = {x:10,y:20}

// function annotation types
// (i:number) =>void 
// define what argument that functions takes and what is retunn type
// here logNumber variable is ponting to a function which a argument i of type number and
// return void.
const logNumber: (i:number) =>void = (i:number) =>{ console.log(i)}

// When to use annotations
// 1) Function that return the 'any' type. example JSON.parse();
// here the type of coordinates is any.
const json = '{"x":10,"y":20}';
const coordinates = JSON.parse(json);
//Solutions
let coordinates1: {x:number;y:number} = JSON.parse(json);

let numbers = [-10,-1,12];
let numberAboveZero: boolean | number = false;
for(let i=0;i<numbers.length;i++){
  if(numbers[i] > 0){
    numberAboveZero = numbers[i];
  }
}