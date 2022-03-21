
const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
function getMinMax(str){
  let arr = str.split(' ').map( item => isNaN(item) || parseFloat(item) );

  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  }
  
}

console.log(getMinMax(inputData));