export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    birthdate!:string;
    adresse!:string;
    passwordneedschange!:boolean;
    failedLoginAttempts!:number;
    accountLocked!:boolean;
    age!:number;
    sexe!:string;
    token: string;
    constructor(){
        this.id=0;
        this.username="";
        this.email="";
        this.password="";
        this.firstname="";
        this.lastname="";
        this.token="";
        
      }
}
