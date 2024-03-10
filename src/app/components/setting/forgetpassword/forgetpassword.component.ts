import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
  
  
})
export class ForgetpasswordComponent {

  constructor(private _Router: Router , ){}
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;

  forgetForm: FormGroup = new FormGroup({
    email: new FormControl(''),
  });

  resetCodeForm: FormGroup = new FormGroup({
    reserCode: new FormControl(''),
  });

  resetPasswordForm: FormGroup = new FormGroup({
    
    
  });

  handleform():void{
    
  }
}
