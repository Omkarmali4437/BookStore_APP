import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/userservice/user-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  show = 1;
  show1 = 0;
  show2 = 1;
  constructor(private user : UserServiceService) { }

  cartArray = [] as any;

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
      this.cartArray = arr.result
      console.log(this.cartArray);
    },(error) =>{
      console.log(error)
    })
  }
}
