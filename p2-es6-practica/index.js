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

const newUserData = {
  id: 3,
  name: 'Igor',
  age: 32
}

const newEmployeeInfo = {
  userId: 3,
  company: 'Company C',
  charge: 'Developer'
}

// 1. Declara una arrow functions que devuelva la combinación de los datos de "user" con "employeeInfo"
// Tras declararla llámala y devuelve su resultado por consola 
//          |
//          |
//        \   /
//         \ /
//          V

const combineUserData = (user, employeeInfo) => {
  return {
    ...user,
    company: employeeInfo.company,
    charge: employeeInfo.charge
  }
}

// BONUS
const combineUserData2 = (user, employeeInfo) => {
  const {company, charge} = employeeInfo
  return {
    ...user,
    company,
    charge
  }
}

const newUser = combineUserData(newUserData, newEmployeeInfo);
console.log(newUser);
console.log(combineUserData2(newUserData, newEmployeeInfo));

// 2. Añade el resultado al listado de usuarios con el operador Spread y devuelvelo por consola
//          |
//          |
//        \   /
//         \ /
//          V

userList = [...userList, newUser]
console.log(userList);

// 3. Devuelve por consola los usuarios que superen los 30 años
//          |
//          |
//        \   /
//         \ /
//          V

const over30 = userList.filter(u => u.age > 30);
console.log(over30);

// 4. Suma las edades de todos los empleados
//          |
//          |
//        \   /
//         \ /
//          V

const sumAges = userList.reduce((total, u) => {
  return total + u.age
}, 0);
console.log(sumAges);