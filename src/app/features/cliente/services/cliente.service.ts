import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private http = inject(HttpClient);

  private apiUrl = `${environment.apiUrl}/clientes`;

  criar(cliente: any): Observable<any> {
    // Requisição limpa: enviando apenas a URL e os dados do cliente, sem os headers de autenticação
    return this.http.post<any>(this.apiUrl, cliente);
  }

}
