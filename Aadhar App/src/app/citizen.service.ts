import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Citizen } from './citizen';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {

  constructor(private httpClient:HttpClient) { }

  private apiUrl="http://localhost:8080/citizen";


  CreateNewCitizen(userdata:any)
  {
    return this.httpClient.post(this.apiUrl, userdata);
  }

  GetAllCitizen() :Observable<Citizen[]>{
    return this.httpClient.get<Citizen[]>(this.apiUrl);
  }

  GetCitizenByID(citizenId:number):  Observable<Citizen>
  {
    return this.httpClient.get<Citizen>(this.apiUrl + '/' + citizenId);
  }

  CheckLoginUser()
  {
    return sessionStorage.getItem('citizen')!=null;
  }

  getLoginUser()
  {
    return sessionStorage.getItem('citizen');
  }

  UpdateCitizen(id:number, citizen:Citizen) : Observable<Object>{
    return this.httpClient.put(`${this.apiUrl}/${id}`, citizen);
  }

  getCitizenIdUsingEmail(email: string): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/byEmail/' + email);
  }

  DeleteCitizen(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
