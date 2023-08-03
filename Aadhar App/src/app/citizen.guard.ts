import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CitizenService } from './citizen.service';


@Injectable({
  providedIn: 'root'
})
export class CitizenGuard implements CanActivate {
  constructor(private router:Router, private service:CitizenService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

    if(this.service.CheckLoginUser()==true)
    {
      //console.log(this.service.CheckLoginUser());
      if(this.router.url.length>0)
      {
        let urlmap = route.url[0].path;
        //console.log(urlmap);
        if(urlmap=="citizenHome" || urlmap=="update" || urlmap=="copy")
          return true;
      }
    }
    else
    {
      alert("First Citizen has to Login");
      this.router.navigate(['citizenLogin']);
      return false;
    }
    return false;
    
    
      
  }
  
}