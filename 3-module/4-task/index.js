
function showSalary(user, ag){
  return user.map( item => {
      if(item.age <= ag){
          return `${item.name}, ${item.balance}`;
      }
   }).join('\n');
}

console.log( showSalary(users, 21) )