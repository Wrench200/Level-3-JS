function concat(array, array2) {
  let array3 = [];
  for (let i = 0; i < array.length; i++) {
    array3.push(array[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    array3.push(array2[i]);
  }
  console.log(array3);
}

