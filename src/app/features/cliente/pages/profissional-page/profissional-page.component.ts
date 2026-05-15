import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { FuncionarioService } from './../../services/funcionario.service';
import { Funcionario } from './../../../../shared/models/funcionario.model';
import { ServicoService } from '../../services/servico.service';


@Component({
  selector: 'app-profissional-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profissional-page.component.html',
  styleUrl: './profissional-page.component.scss'
})
export class ProfissionalPageComponent implements OnInit {

  Funcionarios: Funcionario[] = [];

  constructor(private FuncionarioService: FuncionarioService, private router: Router) { }

  ngOnInit(): void {
    this.FuncionarioService.listar().subscribe({
      next: (data) => {
        this.Funcionarios = data ;
      },
      error: (err) => {
        console.error('Erro ao buscar funcionarios', err);
      }
    });
  }  


  profissionalSelecionado: Funcionario | null = null;

  selecionarProfissional(profissional: any) {
    this.profissionalSelecionado = profissional;
  }

  irParaDataHorario() {
    if (!this.profissionalSelecionado) return;
    this.router.navigate(['/cliente/agendar/data-horario']);
  }
}
