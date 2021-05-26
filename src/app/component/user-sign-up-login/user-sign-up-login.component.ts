import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-sign-up-login',
  templateUrl: './user-sign-up-login.component.html',
  styleUrls: ['./user-sign-up-login.component.css']
})
export class UserSignUpLoginComponent implements OnInit {

  hide = true;

  fullName = new FormControl('',[Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);
  phoneNo = new FormControl('',[Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.password.hasError('required')){
      return 'You must enter a value'
    }
    if(this.fullName.hasError('required')){
      return 'You must enter a value'
    }
    if(this.phoneNo.hasError('required')){
      return 'You must enter a value'
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
