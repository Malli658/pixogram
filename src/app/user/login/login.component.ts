import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  loginData= { email:'', password: '' };
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.loginData.email = 'malli@gmail.com';
    this.loginData.email = this.loginForm.value.email;
    this.loginData.password = this.loginForm.value.password;
    console.log(this.loginData);
  }

}
