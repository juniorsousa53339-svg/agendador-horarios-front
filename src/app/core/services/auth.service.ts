import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any = null;

  login(credentials: any) {
    // futuramente vai chamar API
    this.user = {
      name: 'Teste',
      role: 'ROLE_PROPRIETARIO'
    };
  }

  logout() {
    this.user = null;
  }

  getUser() {
    return this.user;
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }

  hasRole(role: string): boolean {
    return this.user?.role === role;
  }
}
