/**
 * Defination: Interface creates a new type, describing the property names and value types of an object
 * 
 * Interfaces + Classes = How we really get strong code reuse in TS.
 * General Strategy for Reusable Code in TS:
 *  - Create functions that accept arguments that are typed with interfaces.
 *  - Object/Classes can decide to 'implement' a given interface to work with a function.
 *  - How to defined different interfaces to restrict access to different functions.
 */

interface Vehicle{
  name: string,
  year: number,
  broken: boolean,
  summary():string
}

const printVehicle = ({name,year,broken,summary}:Vehicle) =>{
  console.log(`Name: ${name}`);
  console.log(`Name: ${year}`)
  console.log(`Name: ${broken}`)
  console.log(summary());
}

// Passed in object should satisfies the Vechile interface, i.e. properties and type inside interface should
// be present inside the object. Even though object can have additional properties.
const i10 = {
  name:'i10',
  year: 2010,
  broken: true,
  summary():string{
    return `Name: ${this.name} Year: ${this.year} isBroken: ${this.broken}`;
  },
  asa:''
};
printVehicle(i10);