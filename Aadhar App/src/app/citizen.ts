export class Citizen {

    citizenId:number;
	name:string;
	dob:string;
	email:string;
	mobileno:string;
	gender:string;
	address:string;
	uid:string;
	issueDate:string;
	duplicate:string;

    constructor(citizenId:number,name:string,dob:string,email:string,mobileno:string,gender:string,address:string, uid:string,issueDate:string,duplicate:string){
    this.citizenId=citizenId;
	this.name=name;
	this.dob=dob;
	this.email=email;
	this.mobileno=mobileno;
	this.gender=gender;
	this.address=address;
	this.uid=uid;
	this.issueDate=issueDate;
	this.duplicate=duplicate;
    }

}
