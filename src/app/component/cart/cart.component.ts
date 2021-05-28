import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/userservice/user-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  show = 1;
  show1 = 0;
  show2 = 1;

  constructor(private user : UserServiceService,private _snackBar: MatSnackBar) { }

  cartArray = [] as any;
  length = 0;

  ngOnInit(): void {
    this.displayItems()
  }

  display(num){
    this.show += num;
  }
  
  displaynext(){
    this.show1 += this.show;
    this.show2 -= 1;
  }

  displayItems(){
    let arr = [] as any
    this.user.getCartItem().subscribe((res) => {
      console.log(res)
      arr = res
      this.length = arr.result.length;
      this.cartArray = arr.result
      console.log(this.length);
      console.log(this.cartArray);
    },(error) =>{
      console.log(error)
    })
  }

  deleteBook(data : any){
    console.log(data);
    let id  = data._id;
    console.log(id);
    
    this.user.deleteCartItem(id).subscribe((res : any) => {
      console.log(res)
      this._snackBar.open(res.message, "Cancel");
      this.displayItems()
    },(error) => {
      console.log(error)
    })
  }
}
