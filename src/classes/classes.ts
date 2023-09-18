/**
 * Class is a blueprint to create an object with some
 * fields(values) and methods(functions)
 * to represent a 'thing'.
 */

class Vechile{

  //Fields
  color:string;

  // Constructor, you can shotend the field declaration and assignment 
  // by defining in constructor itself example: public make:string
  constructor(color:string, public make:string){
    this.color=color;
  }

  //Functions
  drive():void{
    console.log('vroom vroom');
  }
}


const vehicle = new Vechile('orange','tata');
vehicle.drive();
console.log(`Color is ${vehicle.color} and Make is ${vehicle.make}`);