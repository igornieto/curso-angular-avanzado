/** ======================================
                ES6 Examples
========================================== */

/** ======================================
 * 1. Uso de let para la declaración de variables
 ====================================== */

// var a = 5;
// {
//   let a = 10;
//   console.log('Dentro del ambito', a);
// }
// console.log('Fuera del ámbito', a);

/** ======================================
 * 2. Uso de const para la declaración de constantes
 ======================================*/

// // 2.1

// const a = 5;
// a = 10;

// // 2.2

// {
//   const b = 10;
//   console.log(b)
// }
// console.log(b);

/** ======================================
 * 3. Arrow functions
 ======================================*/

// const foo1 = (arg1, arg2) => {
//   return arg1 + arg2
// }

// console.log(foo1(1,2));

// const foo2 = (arg1, arg2) => arg1 + arg2

// console.log(foo2(1,2));

// const foo3 = (arg1, arg2) => ({ value1: arg1, value2: arg2, sum: arg1 + arg2 })

// console.log(foo3(1,2));

/** ======================================
 * 4. For / Of loop
 ======================================*/

// const colors = ['Red', 'Blue', 'Green'];

// for(let color of colors) {
//   console.log(color);
// }

// const hello = 'Hola mundo';

// for(let char of hello) {
//   console.log(char);
// }

/** ======================================
 * 5. Classes
 ======================================*/

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const usuario1 = new User('Igor', 32);
// console.log(usuario1);

/** ======================================
 * 6. Promises
 ======================================*/

// const multiplier = (number) => {
//   const promise = new Promise((resolve, reject) => {
//     const result = number * number;
//     if(result > 50) {
//       reject('El número es muy alto')
//     }

//     setTimeout(() => {
//       resolve(result);
//     }, 1000)
//   })

//   return promise
// }

// multiplier(6)
//   .then(res => {
//     console.log(res);
//     return multiplier(res);
//   })

// multiplier(6)
//   .then(res => {
//     console.log(res);
//     return multiplier(res);
//   })
//   .then(res => {
//     console.log(res);
//     return multiplier(res);
//   })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(error => {
//     console.log(error)
//   })

// multiplier(1.5)
//   .then(res => multiplier(res))
//   .then(res => multiplier(res))
//   .then(res => {
//     console.log(res);
//   })
//   .catch(error => {
//     console.log(error)
//   })

// console.log('Esta tarea no espera a que se resuelvan las promesas.');

/** ======================================
 * 7. Valores por defecto de los parametros de una función
 ======================================*/

// // OK
// const foo = (arg1, arg2 = 2) => {
//   return arg1 * arg2;
// }

// console.log(foo(4));

// // KO
// const fooKO = (arg2 = 2, arg1) => {
//   return arg1 * arg2;
// }

// console.log(fooKO(4));

/** ======================================
 * 8. Parámetro rest de una función
 ======================================*/

// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// console.log(x);

/** ======================================
 * 9. Spread operator
 ======================================*/

// // Modify User

// let user = {
//   name: 'Igor',
//   age: 32,
// }

// console.log(user);

// let userModified = {
//   ...user,
//   age: 33,
//   company: 'Workohölics'
// }

// console.log(userModified);

// // Clone user

// let user = {
//   name: 'Igor',
//   age: 32,
// }

// let userClone = {...user};

// console.log(user);
// console.log(userClone);

// // Concat array

// const colors1 = ['Red', 'Blue']; 
// const colors2 = ['Black', 'White'];

// const colorsConcated = [...colors1, ...colors2];
// console.log(colorsConcated);

// // Clone array
  
// const colors = ['Red', 'Blue', 'Black', 'White'];
// const colorsClone = [...colors];

// console.log(colorsClone);

/** ======================================
 * 10. Métodos sobre arrays o métodos de iteración
 ======================================*/

 //  ****** Array.map() ********

// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(myFunction);

// function myFunction(value) {
//   return value * 2;
// }

// console.log(numbers2);

// // Arrow function de ES6

// var numbers1 = [45, 4, 9, 16, 25];
// var numbers2 = numbers1.map(n => n * 2);

// console.log(numbers2);

// //  ****** Array.filter() ********

// var numbers = [45, 4, 9, 16, 25];
// var over18 = numbers.filter(myFunction);

// function myFunction(value) {
//   return value > 18;
// }

// console.log(over18);

// // Arrow function de ES6

// var numbers = [45, 4, 9, 16, 25];
// var over18 = numbers.filter(n => n > 18);

// console.log(over18);

// ****** Array.reduce() ********

// var numbers1 = [45, 4, 9, 16, 25];
// var sum = numbers1.reduce(myFunction);

// function myFunction(accumulator, item) {
//   return accumulator + item;
// }

// console.log(sum);

// // Arrow function de ES6

// var numbers1 = [45, 4, 9, 16, 25];
// var sum = numbers1.reduce((acc, item) => acc + item);

// console.log(sum);

// //  ****** Array.find() ********

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(first);

// // Arrow function de ES6

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find((value, index, array) =>  value > 18);

// console.log(first);

// ****** Array.findIndex() ********

// const numbers = [4, 9, 16, 25, 29];
// let firstIndex = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(firstIndex);

// // Arrow function de ES6

// const numbers = [4, 9, 16, 25, 29];
// let firstIndex = numbers.findIndex((value, index, array) => value > 18);

// console.log(firstIndex);
