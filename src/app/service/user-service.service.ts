import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from '../model/constant';
import { SignUp } from '../model/sign-up';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  signUp(signUp: SignUp): Observable<any> {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
    }
    return this.http.post(`${Constant.API_URL}/user/v1/user/save`, signUp, options);
  }
}
