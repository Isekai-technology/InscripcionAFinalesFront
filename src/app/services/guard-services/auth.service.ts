import { Injectable } from '@angular/core';
import { Auth } from 'src/app/models/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userData: Auth | undefined;
  private sessionTimeout: any;
  private readonly AUTH_KEY = 'authenticatedUser';

  constructor() {
    this.loadAuthentication();
  }

  login(userData: Auth) {
    this.isAuthenticated = true;
    this.userData = userData;
    this.resetSessionTimeout();
    this.saveAuthentication();
  }

  logout() {
    this.isAuthenticated = false;
    this.userData!.Contra ="";
    this.userData!.Nombre ="";
    this.userData!.Rol ="";
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
      this.userData!.Contra = localStorage.getItem("contra")!;
      this.userData!.Nombre = localStorage.getItem("nombre")!;
      this.userData!.Rol = localStorage.getItem("rol")!;
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
