import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private userRoles: string[] = [];

  constructor() {
    // Retrieve user roles from local storage or other secure storage
    const storedRoles = localStorage.getItem('userRoles');
    if (storedRoles) {
      this.userRoles = JSON.parse(storedRoles);
    }
  }

  hasRole(role: string): boolean {
    return this.userRoles.includes(role);
  }

  isAdmin(): boolean {
    return this.hasRole('ROLE_ADMIN');
  }
}