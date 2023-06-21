// sum with the for loop
function sum1(array) {
    let num = 0
    for (let index = 0; index < array.length; index++) {
        let sum = num += array[index];  
        num = sum
    }
    console.log(num);
}


//sum with the while loop
function sum2(array) {
    let num2 = 0
    let index = 0
    while (index<array.length) {
        let sum = num2 += array[index];  
        num2 = sum
        index++
    }
    console.log(num2);
}
// sum with the DoWhile loop
function sum3(array) {
    let num3 = 0
    let index = 0
    do {
        let sum = num3 += array[index];  
        num3 = sum
        index++
    } while (index<array.length);
    console.log(num3);
}
