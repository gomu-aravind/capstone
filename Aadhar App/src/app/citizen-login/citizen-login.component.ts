import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitizenService } from '../citizen.service';

@Component({
  selector: 'app-citizen-login',
  templateUrl: './citizen-login.component.html',
  styleUrls: ['./citizen-login.component.css']
})
export class CitizenLoginComponent {
  public loginForm!: FormGroup;
  submitted=false;
  result:any;
  msg:any;
  id:any;
  constructor(private citiService:CitizenService, private formBuilder: FormBuilder,private http: HttpClient , private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email : ['',Validators.required],
     mobileno : ['',Validators.required]

  })
  }
  onSubmit() {
    this.submitted = true;
    this.login();
  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.citiService.getCitizenIdUsingEmail(this.loginForm.value.email).subscribe(
        (id: any) => {
          this.id = id; // Assign the retrieved id to the class property
  
          this.citiService.GetCitizenByID(this.id).subscribe(
            (data: any) => {
              this.result = data;
              if (this.result.mobileno == this.loginForm.value.mobileno && this.result.email == this.loginForm.value.email) {
                sessionStorage.setItem("citizen",this.result.citizenId);
                sessionStorage.setItem("citizenName",this.result.name);
                this.router.navigate(['citizenHome']);
                
              } else {
                this.msg = "Invalid Password";
              }
            },
            (error: any) => {
              this.msg = "Invalid UserName";
            }
          );
        },
        (error: any) => {
          this.msg = "Error occurred while fetching the Citizen ID";
        }
      );
    } else {
      this.msg = "Please fill username/password";
    }
  }
  
      
    
}

