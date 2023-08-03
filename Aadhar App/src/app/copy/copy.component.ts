import { Component } from '@angular/core';
import { CitizenService } from '../citizen.service';
import { Citizen } from '../citizen';
import { Router } from '@angular/router';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.css']
})
export class CopyComponent {
  citizen:Citizen={}as Citizen;
  id:number=0;
  check:string="";

  constructor(private service:CitizenService,private router:Router){
    const dummy=sessionStorage.getItem("citizen");
    if(dummy){
      this.id=JSON.parse(dummy);
    }
    this.getCitizen(this.id);
  }
  userChoice:string="";

duplicateCard(){
  if(this.userChoice==="yes"){
    if(this.id>0){
        this.citizen.duplicate="false";
       this.Update(this.citizen)
    }
  }else{
    this.router.navigate(['citizenHome']);
  }
}
Update(citizen:Citizen){
  this.service.UpdateCitizen(this.id,this.citizen).subscribe(data=>{
    this.router.navigate(['citizenHome']);
  })
}

getCitizen(id:number){
  this.service.GetCitizenByID(id).subscribe(data=>{
    this.citizen=data;
    this.check=this.citizen.duplicate;
    console.log(this.check);
  })
}


}
