import { Component } from '@angular/core';
import { Citizen } from '../citizen';
import { CitizenService } from '../citizen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent {
  citizens:Citizen[]=[];


constructor(private service:CitizenService,private router:Router){
  this.showAllCitizens();
}

ngOnInit(): void {
  this.showAllCitizens();
}

showAllCitizens()
{
  this.service.GetAllCitizen().subscribe(data=>{
    this.citizens = data;
  });
}

deleteCitizen(id:number){
  const confirmDelete = confirm("Are you sure you want to delete this record?");
    if (confirmDelete) {
  this.service.DeleteCitizen(id).subscribe(data=>{
    this.showAllCitizens();
    this.router.navigate(['adminHome']);
  })
}else{
  this.router.navigate(['adminHome']);
}
}

isUid(cid:string): boolean {
  if(cid==="0")
    return true;
  else
    return false;
}

}
