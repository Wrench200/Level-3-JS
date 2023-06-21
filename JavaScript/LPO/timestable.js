//Write a program that prints a multiplication table for numbers up to 12.
function timesTable() {
  for (let main = 1; main <=12; main++) {
    console.log(`The ${main} timestable`);
    for (let index = 1; index <=12; index++) {
      let mul = main * index;
      console.log(`${main}X${index}=${mul}`);
    }
  }
}
timesTable();
