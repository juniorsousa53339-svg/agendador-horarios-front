import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    `http://localhost:8080/agendamentos/disponivel?idFuncionario=${idFuncionario}&dataHora=${dataHora}`
  );

}


criarAgendamento(dados: any) {

  return this.http.post(
    'http://localhost:8080/agendamentos',
    dados
  );

}

}
