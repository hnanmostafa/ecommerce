import { ForgetpassService } from './../../shared/services/forgetpass.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpaasword',
  templateUrl: './forgetpaasword.component.html',
  styleUrls: ['./forgetpaasword.component.css'],
})
export class ForgetpaaswordComponent {
  constructor(
    private _Router: Router,
    private _ForgetpassService: ForgetpassService
  ) {}
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  email: string = '';
  userMsg: string = '';

  forgetForm: FormGroup = new FormGroup({
    email: new FormControl(''),
  });

  resetCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(''),
  });

  resetPasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl(''),
  });
  forgetPassword(): void {
    let userEmail = this.forgetForm.value;
    this.email = userEmail.email;
    this._ForgetpassService.forgetPassword(userEmail).subscribe({
      next: (response) => {
        console.log(response);
        this.userMsg = response.message;
        this.step1 = false;
        this.step2 = true;
      },
      error: (err) => {
        this.userMsg = err.error.message;
      },
    });
  }

  resetCode(): void {
    let resetcode = this.resetCodeForm.value;
    this._ForgetpassService.resetCode(resetcode).subscribe({
      next: (response) => {
        console.log(response);
        this.userMsg = response.status;
        this.step2 = false;
        this.step3 = true;
      },
      error: (err) => {
        console.log(err);
        this.userMsg = err.error.message;
      },
    });
  }
  newPassword(): void {
let resetForm = this.resetPasswordForm.value
resetForm.email =this.email
this._ForgetpassService.resetPassword(resetForm).subscribe({
  next:(response)=>{
    if(response.token){
localStorage.setItem('_token',response.token);
this._Router.navigate(['/home'])
    }
  }




})}}