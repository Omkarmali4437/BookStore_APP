import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AdminserviceService } from '../../service/adminservice/adminservice.service'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  hide = true;

  constructor( private admin : AdminserviceService) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.password.hasError('required')){
      return 'You must enter a value'
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  submit(){
    if(this.email.valid && this.password.valid){
      let reqObj = {
        email : "bookstore@admin.com",
        password : "Xyz@123"
      }

      console.log(reqObj);

      this.admin.login(reqObj).subscribe((res) =>{
        console.log(res);
      },(error) =>{
        console.log(error);
      })
    }
  }

}
