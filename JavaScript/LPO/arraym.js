//Write a function that takes a number and returns a list of its digits. So for 2342, it should return [2,3,4,2].
function numToArray(Number) {
  let array = [];
  let num2 = Number.toString();
  for (let i = 0; i < num2.length; i++) {
    let num3 = parseInt(num2[i]);
    array.push(num3);
  }
  return array;
}


