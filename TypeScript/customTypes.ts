//There are a few ways to create custom types in Typescript

//1-) using the type keyword 
type Soul = {
    name:string,
    age:number,
    gender:string,
    scores:string[],
    dob?:string,
    adress?:string
}
let soul: Soul = {
    name: 'ids',
    age: 2,
    gender: 'Male',
    scores: ['2', '4'],
}

//2-) Interfaces 

interface Idriss extends Soul {
    canPlay():boolean;
}

let idriss: Idriss = {
    name:"Idrs",
    age: 13,
    gender:"male",
    scores:['3', '5'],
    canPlay() { return true;}
}

//3-) ENUM = used to create constants
enum GENDER {
    male = "MALE",
    female = "FEMALE"
}
enum CURRENCIES {
    XAF = "XAF",
    USD = "USD",
    GBP = "GBD",
    EUR = "EUR"
}
let money: CURRENCIES = CURRENCIES.USD;
let gender: GENDER = GENDER.MALE;

//Class => Introduces us to OOP(object oriented programming)