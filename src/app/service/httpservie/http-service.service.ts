import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  post(url:any,data:any){
    return this.httpClient.post(this.baseUrl+url,data);
  }
}
