import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  public loginForm!: FormGroup;
  submitted=false;
  result:any;
  msg:any;
  id:any;
  constructor(private service:AdminService, private formBuilder: FormBuilder,private http: HttpClient , private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
    email : ['',Validators.required],
    password : ['',Validators.required]

  })
  }
  onSubmit() {
    this.submitted = true;
    this.login();
  }

  login() {
    if (this.loginForm.valid) {
      //console.log(this.loginForm.value);
      this.service.getAdminIdUsingEmail(this.loginForm.value.email).subscribe(
        (id: any) => {
          this.id = id; // Assign the retrieved id to the class property
  
          this.service.GetAdminByID(this.id).subscribe(
            (data: any) => {
              this.result = data;
              if (this.result.password == this.loginForm.value.password && this.result.email == this.loginForm.value.email) {
                
                sessionStorage.setItem("admin",this.result.id);
                sessionStorage.setItem("adminName",this.result.adminName);
                this.router.navigate(['adminHome']);
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
          this.msg = "Error occurred while fetching the Admin ID";
        }
      );
    } else {
      this.msg = "Please fill username/password";
    }
}
}