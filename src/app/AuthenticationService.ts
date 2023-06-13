import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  
  private loggedIn = false;
  showHeaderButtons!: boolean;
 
  
  constructor(private http: HttpClient) {}


  

  setLoggedIn(value: boolean) {
    this.loggedIn = value;
  }

  isUserLoggedIn() {
    return this.loggedIn;
  }

  logOut() {
    sessionStorage.removeItem('username');
    this.loggedIn = false;
    sessionStorage.removeItem('password');
  }
}
