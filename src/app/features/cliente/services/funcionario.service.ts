import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Funcionario } from '../../../shared/models/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

   private funcionariosApi = 'http://localhost:8080/funcionarios';

  constructor(private http: HttpClient) {}

    // METODOS PARA O (=== FUNCIONARIO ===)
  listarFuncionarios() {
    return this.http.get<Funcionario[]>(`${this.funcionariosApi + '/listar'}`);
  }

  criar(funcionario: any) {
    return this.http.post( this.funcionariosApi, funcionario  );
  }

  editarFuncionario(funcionario: any) {
    return this.http.put(
      `${this.funcionariosApi}/${funcionario.idFuncionario}`,
      funcionario
    );
  }

  buscarFun(idFuncionario: string | null){
    return this.http.get<Funcionario>( `${this.funcionariosApi}/${idFuncionario}`,
      );
  }

  excluirFuncionario(nomeFuncionario: string | null) {
    return this.http.delete<Funcionario>(
      `${this.funcionariosApi}/${nomeFuncionario}`);
  }
}
