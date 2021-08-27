import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-accountupdate',
  templateUrl: './accountupdate.component.html',
  styleUrls: ['./accountupdate.component.css']
})
export class AccountupdateComponent implements OnInit {

  @ViewChild('f') formData: NgForm;
  user = { name: '', password: '', email: '', gender: '' }
  genders = ['male', 'female', 'other'];
  defualtGender = 'male';

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.user.email = this.formData.value.email;
    this.user.password = this.formData.value.password;
    this.user.name = this.formData.value.name;
    this.user.gender = this.formData.value.gender;
  }

  public onReset() {
    this.formData.reset();
  }

}

