import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AgendaService } from '../../agenda.service';





@Component({
  selector: 'app-agenda-funcionario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaFuncionarioComponent implements OnInit {

  constructor(private agendaService: AgendaService) {}


  diasSemana: any[] = [];
  diaSelecionado: any;
  dataBase = new Date();

  agendamentos: any[] = [];

  ngOnInit() {
    this.gerarSemana();
    this.carregarAgendamentos();
  }

  gerarSemana() {
    this.diasSemana = [];

    for (let i = 0; i < 7; i++) {
      const data = new Date(this.dataBase);
      data.setDate(this.dataBase.getDate() + i);

      this.diasSemana.push({
        nome: data.toLocaleDateString('pt-BR', { weekday: 'short' }),
        numero: data.getDate(),
        data
      });
    }

    this.diaSelecionado = this.diasSemana[0];
  }

  selecionarDia(dia: any) {
    this.diaSelecionado = dia;

    //  BACKEND: buscar agendamentos do dia
    this.carregarAgendamentos();
  }

  proximaSemana() {
    this.dataBase.setDate(this.dataBase.getDate() + 7);
    this.gerarSemana();
  }

  voltarSemana() {
    this.dataBase.setDate(this.dataBase.getDate() - 7);
    this.gerarSemana();
  }

  carregarAgendamentos() {
const idFuncionario = '45cfb947-4006-4511-a9ba-3068c92a2d76';

const data = this.diaSelecionado.data;

const dataHora =
  data.getFullYear() + '-' +
  String(data.getMonth() + 1).padStart(2, '0') + '-' +
  String(data.getDate()).padStart(2, '0') +
  'T00:00:00';

  console.log(idFuncionario);
console.log(dataHora);

this.agendaService
  .buscarAgendaFuncionario(idFuncionario, dataHora)
  .subscribe({

    next: (res: any) => {

      console.log(res);

      this.agendamentos = res;

    },

    error: (err) => {

      console.error(err);

    }

  });

    // FUTURO BACKEND
    /*
    this.service.buscarPorDia(this.diaSelecionado.data)
    */
  }
}
