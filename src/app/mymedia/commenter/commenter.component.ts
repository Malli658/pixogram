import { Component, Input, OnInit } from '@angular/core';
import { MediaService } from '../../service/media.service';

@Component({
  selector: 'app-commenter',
  templateUrl: './commenter.component.html',
  styleUrls: ['./commenter.component.css']
})
export class CommenterComponent implements OnInit {
  @Input('url') userUrl: string;
  user: any;
  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.getUser(this.userUrl).subscribe(response => {
      console.log(response);
      if (response) {
        this.user = response;
      }
      console.log("username:"+this.user.userName);
    }, error => {
      console.log(error);
    });
  }

}
