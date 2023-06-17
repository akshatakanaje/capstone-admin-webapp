import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpclient: HttpClient) { }

  getAll() {
    return this.httpclient.get<any[]>(`${environment.baseUrl}/orders?`);
  }

  getOne(id:number) {
    return this.httpclient.get<any[]>(`${environment.baseUrl}/orders/${id}`);
  }

  save(orderObj:any) {
    return this.httpclient.post<any[]>(`${environment.baseUrl}/orders`, orderObj);
  }

  update(orderObj:any) {
    return this.httpclient.put<any[]>(`${environment.baseUrl}/orders`, orderObj);
  }

  delete(orderId:any) {
    return this.httpclient.delete<any[]>(`${environment.baseUrl}/orders/${orderId}`);
  }
}
