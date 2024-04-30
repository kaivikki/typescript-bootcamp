function computeDataRange(...args) {
  let dateRange = args[0];
  dateRange  = Number(dateRange);
  if(isNaN(dateRange)){
    throw new Error(`First argument[dateRange] to computeDataRange function should be a number`);
  }
  return dateRange; 
}

function evaluateFunction(fnName, args) {
  if (fnName === 'computeDataRange') {
      return computeDataRange(...args);
  }
  throw new Error(`Invalid function name ${fnName} in bloomberg request template`);
}

function parseArguments(argString) {
  return argString.split(/,\s*/).map(arg => {
    if (arg.startsWith("'") && arg.endsWith("'")) {
        return arg.slice(1, -1);
    } else if (!isNaN(parseFloat(arg))) {
        return parseFloat(arg);
    }
    return arg;
});
}

let inputString = `
A=10
C=fn(computeDataRange1,  30,  45)
`;

function replaceFnCalls(input) {
    const fnRegex = /fn\((\w+)(,\s*(?:\d+|'[^']*'))*\)/g;
    return input.replace(fnRegex, (match, fnName) => {
      const argString = match.replace(/^fn\((\w+),\s*/, '').slice(0, -1);
      const args = parseArguments(argString); 
      return evaluateFunction(fnName, args);
    });
}

const outputString = replaceFnCalls(inputString);
console.log(outputString);
