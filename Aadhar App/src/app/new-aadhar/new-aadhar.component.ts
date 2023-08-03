import { Component } from '@angular/core';
import { Citizen } from '../citizen';
import { CitizenService } from '../citizen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-aadhar',
  templateUrl: './new-aadhar.component.html',
  styleUrls: ['./new-aadhar.component.css']
})
export class NewAadharComponent {
  citizens:Citizen[]=[];
  onecitizen:Citizen={}as Citizen;
  todayDate:string="";

  constructor(private service:CitizenService,private router:Router){
    this.showNewCitizens();
    this.todayDate=`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
  }
  
  ngOnInit(): void {
    this.showNewCitizens();
  }
  
  showNewCitizens()
  {
    this.service.GetAllCitizen().subscribe(data=>{
      this.citizens = data.filter(citizen => citizen.uid === "0");
    });
  }

  generate(id:number){
    const confirmation = confirm('Are you sure you want to generate a new UID?');
    let newUid:string;
    if(confirmation){
      newUid = this.generateNewUid(12);
      this.service.GetCitizenByID(id).subscribe(data=>{
        if(data.uid==="0"){
          this.onecitizen=data;
          this.onecitizen.uid=newUid;
          this.onecitizen.issueDate=this.todayDate;
          console.log(this.onecitizen);
           this.update(id);
      }else{
        this.router.navigate(['adminHome']);
      }
      })
    }else{
      this.router.navigate(['newArrival'])
    }
    

  }

  update(id:number){
    this.service.UpdateCitizen(id,this.onecitizen).subscribe(data=>{
      this.router.navigate(['adminHome']);
    })
  }

  generateNewUid(digits:number):string{
    let randomNumber = '';
    for (let i = 0; i < digits; i++) {
      if(i==4||i==8){
        randomNumber+=" ";
      }
      randomNumber += Math.floor(Math.random() * 10).toString();
    }
    console.log(randomNumber)
    return randomNumber;
  }

 
}
