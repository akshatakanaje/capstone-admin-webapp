import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpclient: HttpClient) { }

  getAll(){
    return this.httpclient.get<any[]>('../../assets/json/users.json');
  }

  getOne(id:number){
    return this.httpclient.get<any[]>('../../assets/json/users.json');
  }
}
