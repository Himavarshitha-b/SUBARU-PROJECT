import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../AuthenticationService';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password!: string;
  errorMsg!: string;
  showView: string = 'login';
  isLoggedIn = true;
  showLoginForm!: boolean;
  RegisterUrl = 'http://localhost:8080/Register';
  loginUrl = 'http://localhost:8080/Login';
  userName!: string;
 

  constructor(
    private authService: LoginService,
    private router: Router,
    private http: HttpClient
  ) {}
  
  ngOnInit(): void {
   
  }

  onLoginClicked() {
    this.showLoginForm = true;
  }

  Register() {
    console.log(`userName: ${this.userName}, password: ${this.password}`);
    this.http.post(this.RegisterUrl, { userName: this.userName, password: this.password }, { responseType: 'text' }).subscribe(
      (response) => {
        console.log('Register response:', response);
        if (response === 'User Added') {
          this.showView = 'login';
        } else {
          this.errorMsg = 'Invalid username or password.';
        }
      },
      (error) => {
        console.error('Register error:', error);
        this.errorMsg = 'Invalid username or password.';
      }
    );
  }
  
  showRegister() {
    this.showView = 'register';
  }
  
  showLogin() {
    this.showView = 'login';
  }
  login() {
     console.log(`userName: ${this.userName}, password: ${this.password}`);
    this.http.post<{ message: string }>(this.loginUrl, { userName: this.userName, password: this.password }).subscribe(
      // this.http.get<{ message: string }>(this.loginUrl).subscribe(
      (response) => {
        console.log('Login response:', response);
        const message = response.message;
        if (message === 'login successful') {
          this.isLoggedIn = true;
          this.showView = 'dashboard';
          this.authService.setLoggedIn(true); // set the loggedIn status
          this.router.navigate(['/book-authors-list']);
          console.log('Login successful');
        } else {
          this.errorMsg = 'Invalid username or password.';
        }
      },
      (error) => {
        console.error('Login error:', error);
        this.showView = 'login';
        this.errorMsg = 'Invalid username or password.';
      }
    );
  }

 
  // getlogin() {
  //   this.http.get('http://localhost:8080/login', { responseType: 'text' }).subscribe(
  //     response => {
  //       console.log(response); // Output: "Login Page"
  //       // Handle the response as needed
  //       this.router.navigate(['/book-authors-list']);
  //     },
  //     error => {
  //       console.log('Login error:', error);
  //       // Handle the error
  //     }
  //   );
  // }
    
  }
  
  

  

