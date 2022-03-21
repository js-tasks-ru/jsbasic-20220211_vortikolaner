
function showSalary(users, age){
    let arr = [];
     users.map( item =>{
      if(item.age <= age){
        arr.push(`${item.name}, ${item.balance}`);
      }
    })
    return arr.join('\n');
  }
