
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/auth.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authApi = 'http://localhost:8080/auth/auth/me';
  private user: any = null;
  private credencial: string | null = null;


   constructor(private http: HttpClient) {}



  login(credentials: any) {
    // futuramente vai chamar API
    this.user = {
      name: 'Teste',
      role: 'ROLE_PROPRIETARIO'
    };
  }

  autenticar(username: string, password: string) {

  this.credencial = btoa(`${username}:${password}`);

   console.log('Credencial criada:', this.credencial);

  const headers = new HttpHeaders({
    Authorization: `Basic ${this.credencial}`
  });

  return this.http.get<User>(
    this.authApi,
    { headers }
  );
}

getAuthHeaders() {

  console.log(this.credencial);

  return new HttpHeaders({
    Authorization: `Basic ${this.credencial}`
  });

}

setUser(user: User) {
  this.user = user;
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
