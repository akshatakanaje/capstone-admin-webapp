import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient: HttpClient) { }

  getAll(){
    return this.httpclient.get<any[]>('../../assets/json/products.json');
  }
  
}
