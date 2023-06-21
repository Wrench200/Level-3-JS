function numToArray(Number) {
  let array = [];
  let num2 = Number.toString();
  for (let i = 0; i < num2.length; i++) {
    let num3 = parseInt(num2[i]);
    array.push(num3);
  }
  return array;
}


