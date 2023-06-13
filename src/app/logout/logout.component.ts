import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../AuthenticationService';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService: LoginService,
    private router: Router,
  
  ) {}

  ngOnInit() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}



