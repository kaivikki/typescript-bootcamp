/**
 * Intersection Types
 * Type Guards
 * Discrimated Unions
 * Type Casting
 * Index Properties
 * Function Overloads
 * Optional Chaining
 */

// Intersection Types

/**
 * interface Admin1 {
  name: string;
  privileges: string[];
};
interface Employee1 {
  name: string;
  startDate: Date;
};
interface ElevatedEmployee1 extends Employee1, Admin1 {}
 */
type Admin = {
  name: string;
  privileges: string[];
};
type Employee = {
  name: string;
  startDate: Date;
};
type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Employee | Admin;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

//Type Guards typeof, instanceof (classes)
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) { // Checks in previleges property exists on emp object
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

class Car {
  drive() {
    console.log('Driving...');
  }
}
class Truck {
  drive() {
    console.log('Driving a truck...');
  }
  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle1 = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle: Vehicle1) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);

//Type Casting
// let x = getSomething as MyType, telling TS that getSomething is giving u a MyType

// Index Properties.
interface ErrorContainer {
  id: string;
  [prop:string]:string;
}

// Functional Overloads
function add1(a:number, b:number):number;
function add1(a:string, b:string):string;
function add1(a:Combinable, b:Combinable):Combinable{
  if(typeof a === 'string' || typeof b === 'string'){
    return a.toString() + b.toString();
  }
  return a + b;
}

// Optional Chaining
// If we dont know that some property on a object is set or undefined