/* 
Decorators : Functions that can be used to modify or change different properties and methods in a class.
             Used inside and on classes only.
             Understanding the order in which decorators are ran are the key to understanding them.
             Experimental.

tsconfig.json
"experimentalDecorators": true,              
"emitDecoratorMetadata": true,

Decorator : Executed one single time when we define the class not when we create object of the class.
            First argument is the prototype of the object.
            Second argument is the key of method on which decorator is applied.

*/

class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Something bad!')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}
new Boat().pilot();
