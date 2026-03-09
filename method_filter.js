let numbers = [1, 2, 3, 4, 5, 6, 7];
let even_nums = numbers.filter(isEven);
console.log(even_nums)
function isEven(element){
  return element % 2 == 0;
}

const ages = [16, 17, 18, 19, 20, 40];
const adults = ages.filter(isAdult);
const children = ages.filter( element => element < 18);

function isAdult(element){
  return element >= 18;
}

console.log(adults);
console.log(children);
