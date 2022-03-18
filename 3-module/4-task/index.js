
function showSalary(users, age){
    let arr = [];
     users.map( item =>{
      if(item.age <= age){
        arr.push(`${item.name}, ${item.balance}\n`);
      }
    })
    return arr.join('');
  }
  console.log(showSalary(users, 21));