import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpservie/http-service.service'

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http : HttpServiceService) { }

  accessToken = localStorage.getItem('access');

  options = {
    headers: new HttpHeaders({
      'x-access-token': this.accessToken,
      'Content-Type': 'application/json',
      'accept': 'application/json'
    })
  }

  login(data:any){
    return this.http.post('admin/login',data,'')
  }

  addBook(data : any){
    return this.http.post('admin/add/book',data,this.options);
  }

  getBooks(){
    return this.http.get('get/book',this.options);
  }

  deleteBook(id : any){
    return this.http.delete('admin/delete/book/'+id,this.options)
  }
}
