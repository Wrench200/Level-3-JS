var num1 = "";
var num2 = true;
console.log("the sum is "), num1, num2;
var marks = [2, 3, 5, 6, 7, 8];
var markBy2 = marks.map(function (val) { return val * 2; });
console.log("marks by 2 = ", markBy2);
function addTwo(a, b) {
    var res = a + b;
    return res;
    //it'll return an error in the case the datatype aren't the same but expect the same datatype at the end
}
//function invocation 
var value = addTwo(2, 3);
function purchase(user, amount, dob) {
    alert(user + amount + dob);
    return true;
}
purchase("Idriss", 3400);
var multiplyByTwo = function (array) {
    var val = array.map(function (item) { return item * 2; });
    return val;
};
console.log('result is ', multiplyByTwo(marks));
//Type casting
var a = 2;
var b = '22';
var c = true;
var z = parseInt(b) * a; //ParseInt will give the number representation of b
