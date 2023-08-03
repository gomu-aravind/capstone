import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidator } from './custom-validator';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {
  public registrationForm!: FormGroup;

  msg:string="";
  constructor(private formBuilder: FormBuilder,private service:AdminService , private router:Router) { }

  ngOnInit(): void {
    this.registrationForm=this.formBuilder.group({
      adminName : ['',Validators.required],
      email : ['',Validators.required],
      password : ['',Validators.compose([
        Validators.required, CustomValidator])]

  })
  }
  onSubmit() {
    this.register();
  }

  register(){
    if(this.registrationForm.valid){
      console.log(this.registrationForm.value)
      this.service.CreateNewAdmin(this.registrationForm.value).subscribe(data=>{
        this.router.navigate(['adminLogin']);
      })
    }else{
      this.msg="Please fill in the details";
    }
  }
      
    
  
}
