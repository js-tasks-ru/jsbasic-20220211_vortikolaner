function ucFirst(str) {
  if(str == null || str == ''){
    return '';
} else{
    return str = str[0].toUpperCase() + str.slice(1);
}
}
