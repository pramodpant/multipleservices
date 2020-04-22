import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private _httpClient:HttpClient) { }


  
  public getProducts():Observable<any> {
    return this._httpClient.get('http://localhost:3000/product/');
  }


}
