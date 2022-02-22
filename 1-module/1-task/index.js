function factorial(n) {
  let x = 1;
  if(n == 0 || n == 1){
    return 1
  } else{
    while(n){
      x = x * (n--)
    }
  }
  return x;
}
console.log( factorial(5) );