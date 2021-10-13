var myFirstNumber = 5;
var mySecondNumber = '10';

var operationResult = myFirstNumber + mySecondNumber;

console.log(operationResult);
// Output --> '510'

console.log(typeof(operationResult));
// Output --> string

var secondOperationResult = operationResult / 2;
console.log(secondOperationResult);
// Output --> 255

console.log(typeof(secondOperationResult));
// Output --> number

var thirdOperationResult = secondOperationResult + 'Hola mundo';
console.log(thirdOperationResult);
// Output --> 255Hola mundo

console.log(typeof(thirdOperationResult));
// Output --> string
