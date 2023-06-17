import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  adminLogin(adminReq:any){
    return this.httpClient.post<any[]>(`${environment.baseUrl}/admins/login`, adminReq);
  }

  userLogin(userReq:any){
    return this.httpClient.post<any[]>(`${environment.baseUrl}/users/login`, userReq);
  }
}
