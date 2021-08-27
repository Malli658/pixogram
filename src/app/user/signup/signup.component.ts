import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUp } from '../../model/sign-up';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private signUp: SignUp = new SignUp();
  @ViewChild('f') formData: NgForm;
  genders = ['male', 'female', 'other'];
  defualtGender = 'male';

  constructor(private userService: UserServiceService, private route: Router) { }

  ngOnInit(): void {
    this.signUp.email = "masllllfdsfd";
    this.signUp.gender = "sfsfsf";
    this.signUp.id = 4;
    this.signUp.userName = "sfsf";
  }

  public onSubmit() {
    console.log(this.signUp);
    this.signUp.email = this.formData.value.email;
    this.signUp.password = this.formData.value.password;
    this.signUp.userName = this.formData.value.name;
    this.signUp.gender = this.formData.value.gender.toUpperCase();
    this.userService.signUp(this.signUp).subscribe((data) => {
      if (data === null) {
        this.formData.reset();
        this.route.navigate(['/login']);
      }
      console.log(data);
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');
      } else {
        console.log('Server-side error occured.');
      }
    });
  }

  public onReset() {
    this.formData.reset();
  }
}
