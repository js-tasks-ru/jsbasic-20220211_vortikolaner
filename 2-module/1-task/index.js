// Решение не проходит проверку на NaN
// свойство с NaN вставил в начало объекта.
// let salaries = {
//   'sa': NaN,
//   John: 1000,
//   Ann: 1600,
//   Pete: 1300,
//   'sd': NaN,
//   'acs': 100,
//   month: 'December',
//   currency: 'USD',
//   isPayed: false
// };

// function sumSalary(salaries) {
//   let sum = 0;
//   for(let key in salaries){
//     if ( typeof salaries[key] == 'number' || isFinite(salaries[key])){
//       isNaN(salaries[key]) ? sum : sum += salaries[key];
//     }
//   }
//   return sum;
// }

// console.log(sumSalary(salaries));

// Тут проверка на NaN проходит
// let salaries = {
//   'sa': NaN,
//   John: 1000,
//   Ann: 1600,
//   Pete: 1300,
//   'sd': NaN,
//   'acs': 100,
//   month: 'December',
//   currency: 'USD',
//   isPayed: false
// };

function sumSalary(salaries) {
  let sum = 0;
  for(let key in salaries){
    if ( isNaN(salaries[key])){
       return sum;
    } else if(typeof salaries[key] == 'number' || isFinite(salaries[key])){
      sum += salaries[key];
    } 
  }
  return sum;
}
