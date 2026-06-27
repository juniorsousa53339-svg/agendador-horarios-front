import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Funcionario } from '../../../shared/models/funcionario.model';
import { AuthService } from '../../../core/services/auth.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

private http = inject(HttpClient);
  private authService = inject(AuthService);

   private funcionariosApi = `${environment.apiUrl}/funcionarios`;

  listarFuncionarios() {


    return this.http.get<Funcionario[]>(`${this.funcionariosApi + '/listar'}`
    );
  }

  criar(funcionario: any) {

    const headers = this.authService.getAuthHeaders();
    return this.http.post( this.funcionariosApi, funcionario,
      {headers}
      );
  }

  editarFuncionario(funcionario: any) {

    const headers = this.authService.getAuthHeaders();

    return this.http.put(
      `${this.funcionariosApi}/${funcionario.idFuncionario}`,
      funcionario, {headers}
    );
  }

  buscarFun(idFuncionario: string | null){

    const headers = this.authService.getAuthHeaders();

    return this.http.get<Funcionario>( `${this.funcionariosApi}/${idFuncionario}`,
      {headers}
      );
  }

  excluirFuncionario(nomeFuncionario: string | null) {

    const headers = this.authService.getAuthHeaders();
    return this.http.delete<Funcionario>(
      `${this.funcionariosApi}/${nomeFuncionario}`, {headers});
  }
}
