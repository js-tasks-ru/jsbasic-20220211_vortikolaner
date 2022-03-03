let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let users = [user1];

function showSalary(users, age){
  let arr = [];
   users.forEach( item =>{
    if(item.age <= age){
      arr.push(`${item.name}, ${item.balance}`);
    }
  })
    return arr.join('\n');
}

console.log( showSalary(users, 25) )