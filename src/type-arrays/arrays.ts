const carMakers = ['ford','toyota','chevy'];

// Help with type inference.
/**
 * fordCarMaker type is inteferd by TS as String since we have
 * created any Typed Array
 */
const fordCarMaker = carMakers[0];

// Help with 'map', by providing auto-completes
carMakers.map((car:string)=>{
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | String)[] = [];
importantDates.push(new Date());
importantDates.push('2020-12-27');

