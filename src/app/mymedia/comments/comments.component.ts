import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MediaService } from '../../service/media.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input('url') commentsUrl: string;

  comments = new Array<any>();
  
  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.getComments(this.commentsUrl).subscribe(response => {
      if (response._embedded) {
        this.comments = Array.from(response._embedded.comments);
      }
      console.log("comments:"+this.comments.length);
    }, error => {
      console.log(error);
    });
  }

}
