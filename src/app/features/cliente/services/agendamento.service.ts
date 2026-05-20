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

}
