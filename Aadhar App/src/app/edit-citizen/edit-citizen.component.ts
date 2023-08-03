import { Component, OnInit } from '@angular/core';
import { CitizenService } from '../citizen.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Citizen } from '../citizen';

@Component({
  selector: 'app-edit-citizen',
  templateUrl: './edit-citizen.component.html',
  styleUrls: ['./edit-citizen.component.css']
})
export class EditCitizenComponent {
  id:number=0;
  constructor(private citiService:CitizenService,private router:Router) { 
    const dummy=sessionStorage.getItem("citizen");
    if(dummy){
      this.id=JSON.parse(dummy);
    }
  }

  ngOnInit(): void {
    this.getCitizen();
  }

  msg:string="";
  citizen:Citizen={}as Citizen;


  getCitizen(){
    this.citiService.GetCitizenByID(this.id).subscribe(data=>{
      this.citizen=data;
      console.log(this.citizen);
    })
  }

  UpdateCitizen(){
    this.citiService.UpdateCitizen(this.id,this.citizen).subscribe(data=>{
      sessionStorage.clear();
      sessionStorage.setItem("citizen",JSON.stringify(this.citizen.citizenId));
      sessionStorage.setItem("citizenName",JSON.stringify(this.citizen.name));
      this.router.navigate(['citizenHome']);
    })
  }
}
