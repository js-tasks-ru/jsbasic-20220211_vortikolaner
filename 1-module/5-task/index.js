function truncate(str, maxlength) {
  if( str.length > maxlength){
 
    str = str.substr(0, maxlength );
    str += String.fromCharCode(8230);
    return console.log(str); 
  }
  console.log(str);
}
