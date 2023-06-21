function sumOfNum(Number) {
    let array = [];
    let num2 = Number.toString();
    for (let i = 0; i < num2.length; i++) {
      let num3 = parseInt(num2[i]);
      array.push(num3);
    }
    let num = 0
    for (let index = 0; index < array.length; index++) {
        let sum = num += array[index];  
        num = sum
    }
    return num;
    
}

// use mod 10 get the remainder and 