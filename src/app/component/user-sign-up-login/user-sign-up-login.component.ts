import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userservice/user-service.service';

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

  constructor(private user : UserServiceService) { }

  ngOnInit(): void {
  }

  register(){
    if(this.fullName.valid && this.email.valid && this.password.valid && this.phoneNo.valid){

      let reqObj = {
        fullName : this.fullName.value,
        email : this.email.value,
        password : this.password.value,
        phone : this.phoneNo.value
      }

      this.user.register(reqObj).subscribe((res) => {
        console.log(res)
      },(error) => {
        console.log(error)
      })
    }
  }

  login(){
    if(this.email.valid && this.password.valid){

      let arr = [] as any;
      let reqObj = {
        email : this.email.value,
        password : this.password.value
      }

      this.user.login(reqObj).subscribe((res) => {
        console.log(res)
        arr = res
        console.log(arr.result.accessToken)
        localStorage.setItem('userToken',arr.result.accessToken)
      },(error) => {
        console.log(error)
      })
    }
  }

}