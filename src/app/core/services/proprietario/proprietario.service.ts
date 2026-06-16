
import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { DashboardResumo } from '../../../shared/models/DashboardResumo.model';
import { Funcionario } from "../../../shared/models/funcionario.model";
import { Servico } from "../../../shared/models/servico.model";
@Injectable({

providedIn: 'root'

})
export class ProprietarioService {

private http = inject(HttpClient);

  private api = 'http://localhost:8080/proprietarios';
  private dashboardApi = 'http://localhost:8080/dashboard';
  private funcionariosApi = 'http://localhost:8080/funcionarios';
  private servicosApi = 'http://localhost:8080/servicos';



 // METODOS PARA O     (=== PROPRIETARIO ===)
  criarProprietario(proprietario: any) {

    return this.http.post(
    this.api,
    proprietario
    );
  }

  obterResumoDashboard() {
    return this.http.get<DashboardResumo>(`${this.dashboardApi}`);
  }

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
