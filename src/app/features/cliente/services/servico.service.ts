import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

import { Servico } from '../../../shared/models/servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private http = inject(HttpClient);
  private authService = inject(AuthService);

  private servicosApi = 'http://localhost:8080/servicos';

  listarServicos() {

const headers = this.authService.getAuthHeaders();

    return this.http.get<Servico[]>(`${this.servicosApi + '/listar'}`,{headers}
      );
  }

  criarServicos(Servico: any) {

     const headers = this.authService.getAuthHeaders();

    return this.http.post(
      this.servicosApi,
      Servico,
      {headers}
  );
  }

  editarServicos(Servico: any) {

    const headers = this.authService.getAuthHeaders();

    return this.http.put(
      `${this.servicosApi}/${Servico.idServico}`,
      Servico ,
      {headers}
    );
  }

  buscarServicos(idServico: string | null) {

    const headers = this.authService.getAuthHeaders();

    return this.http.get<Servico>(`${this.servicosApi}/${idServico}`,
      {headers}
    );
  }

  excluirServicos(nomeServico: string | null) {
    const headers = this.authService.getAuthHeaders();

    return this.http.delete<Servico>(
      `${this.servicosApi}/${nomeServico}`,
    {headers});
  }
}
