import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { FuncionarioService } from './../../services/funcionario.service';
import { Funcionario } from './../../../../shared/models/funcionario.model';

import { AgendamentoService } from '../../services/agendamento.service';

@Component({
  selector: 'app-profissional-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profissional-page.component.html',
  styleUrl: './profissional-page.component.scss'
})
export class ProfissionalPageComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor(
    private funcionarioService: FuncionarioService,
    private agendamentoService: AgendamentoService,
    private router: Router
  ) {}

  ngOnInit() {

    this.funcionarioService.listarFuncionarios().subscribe({

      next: (res) => {
        this.funcionarios = res;
      },

      error: (err) => {
        console.error('Erro ao buscar funcionários', err);
      }

    });

  }

  profissionalSelecionado: Funcionario | null = null;

  selecionarProfissional(profissional: Funcionario) {

    this.profissionalSelecionado = profissional;

    this.agendamentoService.agendamento.funcionario = profissional;
  }

  irParaDataHorario() {

    if (!this.profissionalSelecionado) return;

    this.router.navigate(['/cliente/agendar/data-horario']);
  }
}
