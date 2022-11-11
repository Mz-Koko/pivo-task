import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) { }
  readonly baseUrl = 'https://pivo-stable-backend.herokuapp.com';

  loginUser(user: {}){
    return this.http.post(`${this.baseUrl}/login`, user);
  }

}
