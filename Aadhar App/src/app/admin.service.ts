import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient:HttpClient) { }

  private apiUrl="http://localhost:8080/admin";


  CreateNewAdmin(userdata:any)
  {
    return this.httpClient.post(this.apiUrl, userdata);
  }

  GetAllAdmin() :Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(this.apiUrl);
  }

  GetAdminByID(adminId:any)
  {
    return this.httpClient.get<Admin>(this.apiUrl + '/' + adminId);
  }

  CheckLoginUser()
  {
    return sessionStorage.getItem('admin')!=null;
  }

  getLoginUser()
  {
    return sessionStorage.getItem('admin');
  }

  UpdateAdmin(id:string, admin:Admin) : Observable<Object>{
    return this.httpClient.put(`${this.apiUrl}/${id}`, admin);
  }

  DeleteAdmin(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }


  getAdminIdUsingEmail(email: string): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/byEmail/' + email);
  }

}
