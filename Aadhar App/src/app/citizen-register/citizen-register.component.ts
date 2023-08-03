import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CitizenService } from '../citizen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citizen-register',
  templateUrl: './citizen-register.component.html',
  styleUrls: ['./citizen-register.component.css']
})
export class CitizenRegisterComponent {
  constructor(private citiService:CitizenService,private router:Router) { }

  ngOnInit(): void {
  }

  msg:string="";

  onAddCitizen(citizenData: {name:string,dob:string,email:string,gender:string,mobileno:string,address:string }, form: NgForm) {
    this.citiService.CreateNewCitizen(citizenData).subscribe(responseData => {
      console.log(responseData);
      this.router.navigate(['citizenLogin']);
    })
  }
}
