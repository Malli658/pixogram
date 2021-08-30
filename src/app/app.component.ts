import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges {

  constructor(private route: Router) {
    console.log(" i am constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("i m on changes");
     }

  UserName= "User";
  profilePicUrl="./assets/Capture.PNG";
  ngOnInit(): void {
    console.log("i am ngonit");
    let tok = sessionStorage.getItem('_token');
    let un = sessionStorage.getItem('_username');
    let upl = sessionStorage.getItem('_userPicLink');
    if (un)
      this.UserName = un;
    if (upl)
      this.profilePicUrl = upl;
    if (!tok)
      this.route.navigate(['/login']);
  }
  title = 'pixogram';
}
