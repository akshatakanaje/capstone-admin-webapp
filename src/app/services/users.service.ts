import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpclient: HttpClient) { }

  getAll() {
    return this.httpclient.get<any[]>(`${environment.baseUrl}/users`); 
  }

  getOne(id:number) {
    return this.httpclient.get<any[]>(`${environment.baseUrl}/users/${id}`);
  }

  save(userObj:any) {
    return this.httpclient.post<any[]>(`${environment.baseUrl}/users`, userObj);
  }

  update(userObj:any) {
    return this.httpclient.put<any[]>(`${environment.baseUrl}/users`, userObj);
  }

  delete(userId:any) {
    return this.httpclient.delete<any[]>(`${environment.baseUrl}/users/${userId}`);
  }
}
