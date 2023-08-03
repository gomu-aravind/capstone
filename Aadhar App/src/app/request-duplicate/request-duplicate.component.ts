import { Component } from '@angular/core';
import { Citizen } from '../citizen';
import { CitizenService } from '../citizen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-duplicate',
  templateUrl: './request-duplicate.component.html',
  styleUrls: ['./request-duplicate.component.css']
})
export class RequestDuplicateComponent {
  citizens:Citizen[]=[];
  perCitizen:Citizen={}as Citizen;

  constructor(private service:CitizenService,private router:Router){
    this.showNewCitizens();
  }
  
  ngOnInit(): void {
    this.showNewCitizens();
  }
  
  showNewCitizens()
  {
    this.service.GetAllCitizen().subscribe(data=>{
      this.citizens = data.filter(citizen => citizen.duplicate === "false");
    });
  }
approve(id:number){
  this.service.GetCitizenByID(id).subscribe(data=>{
    this.perCitizen=data;
    this.perCitizen.duplicate="true";
    this.updateList(id,this.perCitizen);
  })
}

updateList(id:number,citizen:Citizen){
  this.service.UpdateCitizen(id,citizen).subscribe(data=>{
    this.router.navigate(['adminHome']);
  })
}

}
