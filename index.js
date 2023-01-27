function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  if(y===0){
    throw new Error('You can not divide by zero')
  }


  return x / y;
}
function smallest(arr) {
    let arr2 = Math.min(...arr);
    return arr2;
  };
  function noSpaces(str) {
    return str.split(" ").join("").trim().replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
  };
function sort(arr) {
    return arr.sort((a, b)=> a - b)
   }
function emailMaker(str) {

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if(specialChars.test(str)){
    throw new Error('input contains special character')
  }

  return str.split(" ").join(".") + "@gmail.com";
}
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.smallest = smallest;
module.exports.noSpaces = noSpaces;
module.exports.sort = sort;``
module.exports.emailMaker = emailMaker;