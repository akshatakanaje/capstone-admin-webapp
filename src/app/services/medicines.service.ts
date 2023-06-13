import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  constructor(private httpclient: HttpClient) { }

  getAll(){
    return this.httpclient.get<any[]>('../../assets/json/medicines.json');
  }
}
