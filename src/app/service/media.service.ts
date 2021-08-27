import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../model/comment';
import { Constant } from '../model/constant';
import { Media } from '../model/media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  baseUrl = Constant.API_URL;

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    console.log(this.baseUrl);
    const formData = new FormData();
    formData.append("file", file, file.name);
    return this.http.post(this.baseUrl.concat("/media/v1/media/save/file"), formData);
  }

  uploadMedia(media: Media): Observable<any> {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json'),
      responseType: 'text' as 'text'
    }
    return this.http.post(this.baseUrl.concat("/media/v1/media/save"), media, options);
  }

  uploadMedias(media: Media[]): Observable<any> {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json'),
      responseType: 'text' as 'text'
    }
    return this.http.post(this.baseUrl.concat("/media/v1/media/save/list"), media, options);
  }

  get(loggedinUser: string, user: string, mediaType: string): Observable<any> {
    let options = {
      headers: new HttpHeaders().set('Accept', 'application/json')
    }
    return this.http.get(this.baseUrl.concat('/media/v1/media/get/mymedia/' + user), { params: { owner: loggedinUser, mediaType: mediaType } });
  }

  getMedia(id: string): Observable<any> {
    let options = {
      headers: new HttpHeaders().set('Accept', 'application/json')
    }
    return this.http.get(this.baseUrl.concat('/media/v1/media/get/' + id), options);
  }

  postComment(comment: Comment): Observable<any> {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json'),
      responseType: 'text' as 'text'
    }
    return this.http.post(this.baseUrl.concat("/media/v1/comment/save"), comment, options);
  }

  getComments(url: string): Observable<any> {
    let options = {
      headers: new HttpHeaders().set('Accept', 'application/json')
    }
    return this.http.get(url, options);
  }

  getUser(url: string): Observable<any> {
    let options = {
      headers: new HttpHeaders().set('Accept', 'application/json')
    }
    return this.http.get(url, options);
  }

  updateLikeOrUnlike(operation: string, type: string, mediaId: string, userID: number): Observable<any> {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json'),
      responseType: 'text' as 'text'
    }
    return this.http.patch(this.baseUrl.concat("/media/v1/media/like/unlike"), {}, { params: { media: mediaId, operation: operation, type: type, userID: userID }});
  }
}

