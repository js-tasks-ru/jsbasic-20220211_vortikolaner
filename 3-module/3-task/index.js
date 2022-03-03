function camelize(str) {
  let arr = str.split('-');
    let arr2 = [];
    let str2 = arr.shift();
    for(let key of arr){
      arr2.push(key[0].toUpperCase() + key.slice(1))
    }
    arr2.unshift(str2)
    return arr2.join('')
}
