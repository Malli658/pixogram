import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthReques } from '../../model/auth-reques';
import { Loggedin } from '../../model/loggedin';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  authRequest = new AuthReques();
  loggedin = new Loggedin();
  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit() {
   
    this.authRequest.username = this.loginForm.value.username;
    this.authRequest.password = this.loginForm.value.password;
    this.userService.login(this.authRequest).subscribe((resp: HttpResponse < any >) => {
      let token = resp.headers.get('Authorization');
      if (token)
        sessionStorage.setItem('_token', token);
      if (resp.body) {
        this.loggedin.id = resp.body.id;
        this.loggedin.email = resp.body.email;
        this.loggedin.userName = resp.body.userName;
        this.loggedin.userProfilePicLink = resp.body.userProfilePicLink;
        sessionStorage.setItem('_username', this.loggedin.userName);
        sessionStorage.setItem('_userId', this.loggedin.id);
        sessionStorage.setItem('_userPicLink', this.loggedin.userProfilePicLink);
        this.router.navigate(['/mymedia']);
      }
      
      
     // sessionStorage.setItem('_email', data.email);
    }, err => {
      console.log(err);
    });
  }

}
