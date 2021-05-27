import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/service/adminservice/adminservice.service';
import { UserServiceService } from 'src/app/service/userservice/user-service.service';

interface Sort {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  selectedValue: string;

  bookArray = [] as any
  constructor(private admin : AdminserviceService,private user : UserServiceService) { }

  sorts: Sort[] = [
    {value: 'lowtohigh', viewValue: 'Price: Low to High'},
    {value: 'hightolow', viewValue: 'Price: Hight to Low'},
    {value: 'new', viewValue: 'Newest'}
  ];

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    let arr = [] as any;
    this.admin.getBooks().subscribe((res)=>{
      console.log(res);
      arr = res;
      console.log(arr.result);
      this.bookArray = arr.result;
    },(error)=>{
      console.log(error);
    })
  }

  addToCart(data){
    console.log(data);

    let productId = data._id;

    let reqObj = {
      quantity : 1
    }
    console.log(productId);

    this.user.addProduct(productId,reqObj).subscribe((res) => {
      console.log(res)
    },(error) => {
      console.log(error)
    })
  }

}
