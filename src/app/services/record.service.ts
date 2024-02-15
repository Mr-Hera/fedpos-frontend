import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Record } from '../Record';
import { Vat } from '../Vat';
import { RECORDS } from '../mock-records';
import { Observable, of } from 'rxjs';
import { Discount } from '../Discount';
import { NewRecord } from '../NewRecord';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  private apiUrl = "http://febpos-backend.test/api/v1/products";
  private vatUrl = "http://febpos-backend.test/api/v1/statements/vat-transactions";
  private discountUrl = "http://febpos-backend.test/api/v1/statements/discount-transactions";
  private createUrl = "http://febpos-backend.test/api/v1/products/create";

  constructor(private http: HttpClient) { }

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(this.apiUrl);
  }
  getVats(): Observable<Vat[]> {
    return this.http.get<Vat[]>(this.vatUrl);
  }
  getDiscounts(): Observable<Vat[]> {
    return this.http.get<Discount[]>(this.discountUrl);
  }
  addRecord(record: NewRecord): Observable<NewRecord[]> {
    return this.http.post<NewRecord[]>(this.createUrl, record, httpOptions);
  }
}
