# Type Script
- Typescript = Javascript + A type system.
- **Type System** : 
  - Help us catch error during development.
  - Uses Type Annotations to analyze our code.
  - Only Active during development.
  - Doesn't provide any performance optimization.
- **Typescript Compiler**:
  - npm install -g typescript ts-node
  - npm install @types/node --save-dev
  - tsc --help
  - tsc file.ts
  - ts-node file.ts
- **Syntax and Features**
  - **Interfaces**
    - Interfaces in type script is used to define the structure of an object.
  - **Type**
    - Easy way to refer to the different properties+functions that a value(anthing we assign to variable) has.
    - Types Classifications:
  ![Demo Animation](../images/overview/types_classification.png?raw=true)
  - **Type Annotations With Variables**:Code we add to tell Typescript what type of value a variable will refer to.
    ```js
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
    let now: Date = new Date()

    // Array Annotation Type
    let colors: string[] = [''];

    // Class Annotation Type
    class Car{}
    let car: Car = new Car();
    
    // Object Literal annotation types
    /* Only thing that can be assigned to point is a object with two properties x and y which are both number.*/
    let point: {x:number;y:number} = {x:10,y:20}

    // function annotation types
    /*(i:number) =>void 
    define what argument that functions takes and what is return type
    ,here logNumber variable is ponting to a function which a argument i of type number and return void.*/
    const logNumber: (i:number) =>void = (i:number) =>{ console.log(i)}
    ```
  - **Type interence with variables**: 
    - Typescript tries to figure out what type of value a varaible refers to.
    - If the variable declaration and initialization are on the same line, Typescript will figure out the type of 'variable' for us, instead of we explicitly needing to tell what it is.
![Demo Animation](../images/type-annotations/annotations_vs_inference.png?raw=true)
    ```js
    //                    When to use annotations
    // 1) Function that return the 'any' type. example JSON.parse();
    // here the type of coordinates is any.
    const json = '{"x":10,"y":20}';
    const coordinates = JSON.parse(json);
    //Solutions
    let coordinates1: {x:number;y:number} = JSON.parse(json);
   
    // 2) Variable whose type cannot be inferred correctly
    let numbers = [-10,-1,12];
    let numberAboveZero: boolean | number = false;
    for(let i=0;i<numbers.length;i++){
      if(numbers[i] > 0){
        numberAboveZero = numbers[i];
      }
    }
    ```
  - **Type annotations for Functions** : Code we add to tell Typescript what type of arguements a function will recieve and what types of values it will return.
  - **Type inference for Functions** : Typescript tries to figure out what type of value a function will return.
```js

const add = (a:number, b:number):number =>{
  return a+b;
}

const logger = (message:string):void =>{
  console.log(message);
}

/**
 * Destructuring with annotations
 * Methods which takes an object with specified keys as arguments
 * returns void.
 * @param {date:Date,weather:string} {date,weather}
 * @returns void
 */
const printWeather = ({date,weather}:{date:Date,weather:string}):void =>{
  console.log(date);
  console.log(weather);
}
printWeather({
  date: new Date(),
  weather: 'sunny'
});

```
  - **Type annotations for Objects** : Code we add to tell Typescript what type of arguements a function inside an object will recieve and what types of values it will return.
  - **Type inference for Objects** : Object Destructing.
```js
    // Object which has functional declarations inside it with type annotations
    const profile = {
      firstName: 'vikram',
      dob: 10041985,
      age: 38,
      coords:{
        lat:0,
        lng:15
      },
      setAge(age:number):void{
        this.age = age
      }
    };

    // ES2015 Object Destructuring.
    const { age } : { age:number } = profile;
    const { dob, firstName } : { dob:number, firstName:string } = profile;
    const { coords:{lat,lng} } : { coords:{lat:number,lng:number} } = profile;

    console.log(age);
    console.log(lat);
    console.log(lng);
```
 - 



- Defination
- Why do we care ?
- Examples
- When u to use ?
