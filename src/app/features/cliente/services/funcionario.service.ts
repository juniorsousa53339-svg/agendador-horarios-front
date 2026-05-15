import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Funcionario } from '../../../shared/models/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = 'http://localhost:8080/funcionarios/listar';

  constructor(private http: HttpClient) {}

  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }
}
