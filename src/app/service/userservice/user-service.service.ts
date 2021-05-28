import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpservie/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  accessToken = localStorage.getItem('userToken');

  options = {
    headers: new HttpHeaders({
      'x-access-token': this.accessToken,
      'Content-Type': 'application/json',
      'accept': 'application/json'
    })
  }
  
  constructor(private http : HttpServiceService) { }

  register(data : any){
    return this.http.post('registration',data,'')
  }

  login(data : any){
    return this.http.post('login',data,'')
  }

  addProduct(id : any,data : any){
    return this.http.post('add_cart_item/'+id,data,this.options)
  }

  getCartItem(){
    return this.http.get('get_cart_items',this.options)
  }

  addToWishlist(id : any, data: any){
    return this.http.post('add_wish_list/'+id,data,this.options)
  }

  deleteCartItem(id : any){
    return this.http.delete('remove_cart_item/'+id,this.options)
  }

  editDetails(data : any){
    return this.http.put('edit_user',data,this.options)
  }

  addOrder(data : any){
    return this.http.post('add/order',data,this.options)
  }
}
