import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servico } from '../../../shared/models/servico.model'
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private apiUrl = `${environment.apiUrl}/servicos/listar`;

  constructor(private http: HttpClient) {}

  listar(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.apiUrl);
  }
}
