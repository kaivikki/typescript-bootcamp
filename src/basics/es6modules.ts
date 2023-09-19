/**
 * // Important individual components
 * import { <what u want to import> , <what u want to import> } from '<Javascript file which is exporting>'
 * 
 * // Grouping the imports
 * import * as <Alias> from '<Javascript file which is exporting>'
 *    then use Alias. to use the exported stuff
 * 
 * // Default Exports /Imports : 
 * If you only have one thing to export in the file u can add the default keyword
 * example default export const = {} 
 * you can have named and default export mixed in the file, but you can only have one default export in the file.
 *    
 *  You can import default exports without curly braces with name of your choice
 *  import MyName from <File with Default Export>;
 * 
 * https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 * 
 * 
 * tsconfig for node => moduleResolution "node"
 */