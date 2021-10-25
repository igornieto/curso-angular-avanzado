/**
  ==============
  PRÁCTICA 2 - ES6
  ==============
  Dadas las siguientes variables completa las siguientes operaciones que se indican en los comentarios utilizando ES6:
*/

let userList = [
  {
    id: 1,
    name: 'Gorka',
    age: 28,
    company: 'Company A',
    charge: 'Developer'
  },
  {
    id: 2,
    name: 'Peio',
    age: 40,
    company: 'Company B',
    charge: 'Designer'
  }
]


let user = {
  id: 3,
  name: 'Igor',
  age: 32
}

let employeeInfo = {
  userId: 3,
  company: 'Company C',
  charge: 'Developer'
}

// 1. Declara una arrow functions que devuelva la combinación de los datos de "user" con "employeeInfo"
// Tras declararla llámala y devuelve su resultado por consola 
//          |
//          |
//        \ | /
//         \|/
//          V

function combineUserData(user, employeeInfo) {
  return {
    ...user,
    company: employeeInfo.company,
    charge: employeeInfo.charge
  }
}

const combineUserDataArrow = (user, employeeInfo) => {
  return {
    ...user,
    company: employeeInfo.company,
    charge: employeeInfo.charge
  }
}

const combineUserDataArrow2 = (user, employeeInfo) => ({
  ...user,
  company: employeeInfo.company,
  charge: employeeInfo.charge
})

const combineUserDataArrow3 = (user, employeeInfo) => {
  const {company, charge} = employeeInfo;
  return {
    ...user,
    company,
    charge
  }
}

const user1 = combineUserData(user, employeeInfo);
const user2 = combineUserData(
  {
    id: 5,
    name: 'María',
    age: 20
  },
  {
    company: 'Company B',
    charge: 'Designer'
  }
);

const newUsers = [user1, user2];


// 2. Añade el resultado al listado de usuarios con el operador Spread y devuelvelo por consola
//          |
//          |
//        \ | /
//         \|/
//          V

userList = [...userList, user1];

// 3. Devuelve por consola los usuarios que superen los 30 años
//          |
//          |
//        \ | /
//         \|/
//          V

const usersOver30 = userList.filter(isOver30);
console.log(usersOver30);

function isOver30(value) {
  return value.age > 30;
}

const usersOver30Arrow = userList.filter(u => u.age > 30);
console.log(usersOver30Arrow);


// 4. Suma las edades de todos los empleados
//          |
//          |
//        \ | /
//         \|/
//          V
const totalAges = userList.reduce(sumTotal, 0);

function sumTotal(acc, value) {
  return acc + value.age
}
console.log(totalAges);




