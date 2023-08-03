import { Component,OnInit } from '@angular/core';
import { CitizenService } from '../citizen.service';
import { Citizen } from '../citizen';

@Component({
  selector: 'app-citizen-dash-board',
  templateUrl: './citizen-dash-board.component.html',
  styleUrls: ['./citizen-dash-board.component.css']
})
export class CitizenDashBoardComponent {

  data:number=0;
  msg:string="";
  citizen:Citizen={}as Citizen;
  constructor(private citiservice:CitizenService){
    const citiData=sessionStorage.getItem("citizen");
    if(citiData){
      this.data=JSON.parse(citiData);
    }
  }

  ngOnInit(){
    this.getCitizenData();
  }

  getCitizenData(){
    this.citiservice.GetCitizenByID(this.data).subscribe(citi=>{
      this.citizen=citi;
      console.log(this.citizen);
      if(this.citizen.uid=="0"){
        this.msg="Your Aadhar card is under process.We will notify you";
      }
    })
  }

  isGiven(){
    if(this.citizen.uid=="0")
      return false;
    else  
      return true;
  }

}
