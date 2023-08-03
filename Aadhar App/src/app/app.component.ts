import { Component ,DoCheck} from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AadharApp';


  navRole="";
  constructor(private router:Router,private service:AdminService){
    this.navRole="";
  }

  ngDoCheck():void
  {
      let currentUrl = this.router.url;
      
      if(currentUrl=="/adminHome"|| currentUrl=="/newArrival" || currentUrl=="/request")
      {
        this.navRole="admin"
      }
      if(currentUrl=="/citizenHome" || currentUrl=="/update" || currentUrl=="/copy")
      {
        this.navRole="citizen"
      }
      if(currentUrl=="/" ||currentUrl=="/adminLogin" ||currentUrl=="/adminRegister" ||currentUrl=="/citizenLogin" ||currentUrl=="/citizenRegister" ){
        this.navRole="";
      }
  }


logOut(){
  sessionStorage.clear();
  this.router.navigate(['']);
}
}
