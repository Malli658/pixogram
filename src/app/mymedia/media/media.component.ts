import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Comment } from '../../model/comment';
import { MediaService } from '../../service/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  id: string;
  media: any;
  comment = '';
  userId :number;
  commentModel: Comment = new Comment();
  like = false;
  unlike = false;
  likesCount = 0;
  unlikesCount = 0;
  likeOrUnlikearr:Array<number>;

  constructor(private route: ActivatedRoute, private mediaService: MediaService) {
    
  }

  ngOnInit(): void {
    let userId = sessionStorage.getItem('_userId');
    if (userId)
      this.userId = Number(userId);
    console.log("i am ng onIn it");
    this.mediaLoading();
  }

  mediaLoading() {
    this.likeOrUnlikearr = new Array<number>();
    this.route.params.subscribe((param: Params) => {
      this.id = param['id'];
      this.mediaService.getMedia(this.id).subscribe(response => {
        this.media = response;
        this.likeOrUnlikearr = Array.from(this.media.like);
        this.likesCount = this.likeOrUnlikearr.length;
        if (this.likeOrUnlikearr.find(x => x == this.userId) != undefined) {
          this.like = true;
        }
        this.likeOrUnlikearr = Array.from(this.media.unlike);
        this.unlikesCount = this.likeOrUnlikearr.length;
        if (this.likeOrUnlikearr.find(x => x == this.userId) != undefined) {
          this.unlike = true;
        }

      }, error => {
        console.log(error);
      });
    });
  }

  postCommnet(mediaId: string) {
    this.commentModel.comment = this.comment;
    this.commentModel.userID = this.userId;
    this.commentModel.mediaId = mediaId;
    this.mediaService.postComment(this.commentModel).subscribe(response => {
      console.log(response);
      this.comment = '';
    }, error => {
      console.log(error);
    });
  }

  setDefualtPic(picUrl: string) {
    this.mediaService.updateProfilePic(this.userId, picUrl).subscribe(resp => {
      console.log(resp);
    }, err => {
      console.log(err);
    });
  }

  likeOrUnLike(operation: string, type: string, mediaId: string) {

    if (operation === 'add') {
      if (type === 'like') {
        this.like = true;
        if (this.unlike)
          this.unlike = false;
      }
      if (type == 'unlike') {
        this.unlike = true;
        if (this.like)
          this.like = false;
      }
    }
    else {
      if (type === 'like')
        this.like = false;
      else
        this.unlike = false;
    }

    this.mediaService.updateLikeOrUnlike(operation, type, mediaId, this.userId).subscribe(resp => {
      console.log(resp);
    }, err => {
      console.log(err);
    });
  }

  

}
