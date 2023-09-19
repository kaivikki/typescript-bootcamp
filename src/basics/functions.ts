//***************************   Functions                   */
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




