import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  show = 1;
  show1 = 0;
  show2 = 1;
  constructor() { }

  ngOnInit(): void {
  }

  display(num){
    this.show += num;
  }
  
  displaynext(){
    this.show1 += this.show;
    this.show2 -= 1;
  }
}
