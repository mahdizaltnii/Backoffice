export class Loginform {
  username:string | null | undefined;
  password:string | null | undefined;

  constructor(){
    this.username="";
    this.password="";
  }
}
export class AuthentificationResponse {
  token!: string;
}
export class AuthentificationRequest {
  email!: string;
  password!: string;
}

export class RegisterRequest {
email!: string;
firstname!: string;
lastname!: string;
 
}