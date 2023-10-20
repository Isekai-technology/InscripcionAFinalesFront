import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userData: Usuario | undefined;
  private sessionTimeout: any;
  private readonly AUTH_KEY = 'authenticatedUser';

  constructor() {
    this.loadAuthentication();
  }

  login(userData: Usuario) {
    this.isAuthenticated = true;
    this.userData = userData;
    this.resetSessionTimeout();
    this.saveAuthentication();
  }

  logout() {
    this.isAuthenticated = false;
    this.userData!.Contra ="";
    this.userData!.Nombre ="";
    this.userData!.ID_Rol =0;
    this.clearSessionTimeout();
    this.removeAuthentication();
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  private resetSessionTimeout() {
    this.clearSessionTimeout();
    this.sessionTimeout = setTimeout(() => {
      this.logout();
    }, 300000); // 5 minutes of inactivity before automatically logging out
  }

  private clearSessionTimeout() {
    if (this.sessionTimeout) {
      clearTimeout(this.sessionTimeout);
      this.sessionTimeout = null;
    }
  }

  private saveAuthentication() {
    localStorage.setItem(this.AUTH_KEY, JSON.stringify(this.userData));
  }

  private loadAuthentication() {
    const authData = localStorage.getItem(this.AUTH_KEY);
    if (authData) {
      this.userData = JSON.parse(authData);
      this.isAuthenticated = true;
      this.resetSessionTimeout();
    }
  }

  private removeAuthentication() {
    localStorage.removeItem(this.AUTH_KEY);
  }

  resetSessionTimeoutOnInteraction() {
    this.resetSessionTimeout();
  }
}
