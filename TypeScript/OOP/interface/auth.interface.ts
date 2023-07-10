interface IAuth {
    login(username: string, password: string): string ;
    signUp(username: string, password: string, email:string, firstname?:string, lastname?:string): boolean ;

//method signature
forgetPassword(email: string): string ;
forgetPassword(email: string, username: string): string ;
forgetPassword(email: string, username: string, isActive: boolean): string ;}