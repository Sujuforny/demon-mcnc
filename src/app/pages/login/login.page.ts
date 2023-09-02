import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder : FormBuilder,private router :Router) {

    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],  
      password: ['', Validators.required], 
    });
   }

  ngOnInit() {
  }

    // Add a method to handle form submission
    login() {
      if (this.loginForm.valid) {
        this.router.navigateByUrl("/appform");
      } else {
        // Form is invalid, display error messages to the user.
      }
    }
  

}
