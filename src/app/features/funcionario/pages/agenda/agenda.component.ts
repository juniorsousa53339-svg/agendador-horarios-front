import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda-funcionario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaFuncionarioComponent implements OnInit {

  nomeFuncionario = 'Junior'; // 🔥 BACKEND

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

    // 🔥 BACKEND: buscar agendamentos do dia
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

    // 🔥 MOCK TEMPORÁRIO
    this.agendamentos = [
      {
        hora: '08:00',
        nome: 'João',
        servico: 'Corte',
        status: 'confirmado'
      },
      {
        hora: '10:00',
        nome: 'Carlos',
        servico: 'Barba',
        status: 'agendado'
      },
      {
        hora: '11:00',
        nome: 'Marcus',
        servico: 'Barba',
        status: 'agendado'
      },
      {
        hora: '16:30',
        nome: 'Luis Vitor',
        servico: 'corte',
        status: 'agendado'
      },

    ];

    // 🔥 FUTURO BACKEND
    /*
    this.service.buscarPorDia(this.diaSelecionado.data)
    */
  }
}
