// built-in types
// built-in typesderivators


// Defining a union type
let username: string | number;
username = 123;
username = '123';
// username = true; // errors out

// partial => makes all parameters default#
type user = {
    name?: string;
    age?: number;
    gender?: string;
}
type Man = Partial<user>;

// type Man ={
//     name?:string;
//     age?:number;                        
//     gender?:string;
// }

// pick => selects the specified to create a new type

type woman = Pick<user, "gender" | "age">;

// for eg
let jane: woman = {
    gender: 'female',
    age: 25
}

// Omit => leaves out the specified to create a new type

type mamal = Omit<user, "age">

