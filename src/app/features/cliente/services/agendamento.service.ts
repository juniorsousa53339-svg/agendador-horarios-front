import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {


 constructor(private http: HttpClient) {}

  agendamento: any = {
  servico: null,
  funcionario: null,
  dataHora: null
};

verificarDisponibilidade(idFuncionario: string, dataHora: string) {

  return this.http.get<boolean>(
    `${environment.apiUrl}/agendamentos/disponivel?idFuncionario=${idFuncionario}&dataHora=${dataHora}`
  );

}


criarAgendamento(dados: any) {

  return this.http.post(
    `${environment.apiUrl}/agendamentos`,
    dados
  );

}

}
