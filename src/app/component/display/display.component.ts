import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../../service/adminservice/adminservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  bookArray = [] as any;
  message = "done";

  constructor(private admin : AdminserviceService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  updatePage($event){
    if($event == this.message){
      console.log(this.message);
      this.getAllBooks();
    }
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
}
