import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from '../model/media';
import { MediaService } from '../service/media.service';

@Component({
  selector: 'app-mymedia',
  templateUrl: './mymedia.component.html',
  styleUrls: ['./mymedia.component.css']
})
export class MymediaComponent implements OnInit {
  
  user = "1";
  owner = "1";
  mediaType = "ALL";
  mediasData = new Array<any>();
  self: any;

  constructor(private mediaService: MediaService, private route: Router) { }

  ngOnInit(): void {
    let userId = sessionStorage.getItem('_userId');
    if (userId) {
      this.user = userId;
      this.owner = userId;
    }
     

    this.getMedias();
  }

  filterMedia(fValue: any) {
    this.mediaType = fValue;
    this.getMedias();
  }
  getMedias() {
    this.mediaService.get(this.owner, this.user, this.mediaType).subscribe(response => {
      this.mediasData = Array.from(response._embedded.media);
      this.self = response._links.self;
    }, error => {
      console.log("..........i got error boss");
    });
  }

  viewMedia(id: any) {
    console.log("i am routing");
    this.route.navigate(['/mymedia/view',id]);
  };

}
