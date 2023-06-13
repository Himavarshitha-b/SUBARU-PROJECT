import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../AuthenticationService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showHeaderButtons=false;
  

  
  constructor(public loginService: LoginService, public router: Router) { }

  ngOnInit(): void {
  }
  

  get isLoggedIn() {
    return this.loginService.isUserLoggedIn();
    
  }

  onLoginClicked() {
 
    this.router.navigate(['/login']);
    // this.showHeaderButtons = true;
     // navigate to the login page
  }
  
 
}
