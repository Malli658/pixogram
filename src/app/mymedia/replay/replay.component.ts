import { Component, Input, OnInit } from '@angular/core';
import { MediaService } from '../../service/media.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {
  @Input('url') replayUrl: string;
  comments = new Array<any>();
  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {

    this.mediaService.getComments(this.replayUrl).subscribe(response => {
      if (response._embedded) {
        this.comments = Array.from(response._embedded.comments);
        
      }
      console.log("replay:"+this.comments.length);
    }, error => {
      console.log(error);
    });
  }

}
