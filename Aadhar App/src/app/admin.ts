export class Admin {

    id:number;
	adminName:string;
	email:string;
	password:string;

    constructor(id:number,adminName:string,email:string,password:string){
        this.id=id;
        this.adminName=adminName;
        this.email=email;
        this.password=password;
    }
}
