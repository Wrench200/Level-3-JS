//Class => Introduces us to OOP(object oriented programming)
//class deifintion
class Person {
    //properties
    name: string = 'Kambang';
    age: number = 1;
    gender: Gender = Gender.MALE;

    //methods
}

//class instantiation - creating objects of the class
//To instantiate a class we use the 'new' keyword 
let mrKambang = new Person();
//class usage 
//to acces the methods/props of a class
//we use the dot notation (.)
console.log('The person is ',mrKambang.name);

//to pass dependecies to a class , we use the class constructor 
//example

class GenerateReport {
    marks: number[];
    student: string;
    gender: Gender = Gender.FEMALE;

    //recieve the marks and student props as dependencies
    constructor(score:number[] ,name: string, gender?: Gender) {
        this.marks = score;
        this.student = name;
        this.gender = gender ? gender: this.gender;
    }
}
// instantiation
let ruthsReport = new GenerateReport([16, 12, 17], 'Ruth');

//usage 
console.log('Report card is =>', ruthsReport.marks,ruthsReport.student);

//Getters and Setters 

class Animal {
    name: string;
    age: number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    setName(name:string): void {
        this.name = name
    }
    getName():string {
        return this.name;
    }

    //synthetic sugar
    //get ,set researches for get set keywords used at the same time in Typescript...
}

class School {
    isOpen:boolean= true;
    hasClosed:boolean = false;

    schoolState(){ return this.isOpen;}
}

//Acces modifiers 
// private ,public, protected ,static, abstract, readonly.

class Students {
    public name: string = "";
    public age: number = 0;
    private bankAccountNum: number =0;
    public readonly accountBalance = 250000;

    setAccountNumber(acctNum: number){ //it is accesible here bcs it's within the class
        // this.accountBalance => this erros out
        this.bankAccountNum = acctNum;
    }
    private setAccountCode() {
        this.bankAccountNum = +123;
    }
}
let ben = new Students();
ben.name;
ben.age;
// idriss.bankAccountNum =>
ben.setAccountNumber(887858989);
// idriss.setAccountCode => This errors out

//Inheritance 

class Dog extends Animal {
    //Dog is the child while animal is the parent class
    constructor(name:string , age:number){
        super(name, age);
    }
}
















enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}