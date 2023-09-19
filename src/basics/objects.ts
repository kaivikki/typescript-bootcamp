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