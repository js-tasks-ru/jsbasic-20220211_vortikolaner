function filterRange(arr, a, b) {
  let newArr = [];
  arr.filter(item => {
    if( a >= item || item <= b ){
      newArr.push(item);
  }
  })
   return newArr;
}