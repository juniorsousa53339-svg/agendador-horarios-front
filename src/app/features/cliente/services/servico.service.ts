import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Servico } from '../../../shared/models/servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private servicosApi = 'http://localhost:8080/servicos';

  constructor(private http: HttpClient) {}

  listarServicos() {
    return this.http.get<Servico[]>(`${this.servicosApi + '/listar'}`);
  }

  criarServicos(Servico: any) {
    return this.http.post( this.servicosApi, Servico  );
  }

  editarServicos(servico: any) {
    return this.http.put(
      `${this.servicosApi}/${servico.idServico}`,
      servico
    );
  }

  buscarServicos(idServico: string | null){
    return this.http.get<Servico>( `${this.servicosApi}/${idServico}`,
      );
  }

  excluirServicos(nomeServico: string | null) {
    return this.http.delete<Servico>(
      `${this.servicosApi}/${nomeServico}`);
  }
}
