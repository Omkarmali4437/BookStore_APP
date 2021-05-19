import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpservie/http-service.service'

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http : HttpServiceService) { }

  login(data:any){
    return this.http.post('admin/login',data)
  }

}
