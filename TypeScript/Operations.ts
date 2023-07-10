let num1: string = "";
let num2: boolean = true;
console.log("the sum is "), num1 , num2;

let marks = [ 2, 3, 5, 6, 7, 8];

let markBy2 = marks.map(val => val *2 );

console.log("marks by 2 = ",markBy2);

function addTwo(a:number,b:number): number {
    let res = a + b ;
    return res;
    //it'll return an error in the case the datatype aren't the same but expect the same datatype at the end
}
//function invocation 
let value = addTwo(2,3);

function purchase(user: string, amount: number, dob?: number) { //the question mark on the dob is to make it optional 
    alert(user + amount + dob)
    return true;
}
purchase("Idriss" , 3400)

const multiplyByTwo = (array:number[]):number[] => {
    let val = array.map(item => item * 2);
    return val;
}
console.log('result is ', multiplyByTwo(marks));

//Type casting
let a = 2;
let b = '22';
let c = true;
let z = parseInt(b) * a; //ParseInt will give the number representation of b
