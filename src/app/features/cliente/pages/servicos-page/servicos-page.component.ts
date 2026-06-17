
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Servico } from './../../../../shared/models/servico.model';
import { ServicoService } from '../../services/servico.service';
import { AgendamentoService } from '../../services/agendamento.service';



@Component({
  selector: 'app-servicos-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos-page.component.html',
  styleUrls: ['./servicos-page.component.scss']
})
export class ServicosPageComponent implements OnInit {

  servicos: Servico[] = [];

  constructor(
    private servicoService: ServicoService,
    private router: Router,
    private agendamentoService: AgendamentoService
  ) {}


  ngOnInit() {
    this.servicoService.listarServicos().subscribe({
      next: (data) => {
        this.servicos = data;
      },
      error: (err) => {
        console.error('Erro ao buscar serviços', err);
      }
    });
  }

  // Representa o serviço selecionado (inicialmente nenhum)
 servicoSelecionado: Servico | null = null;

  // Função chamada quando clicar no card
  selecionarServico(servico: any) {

    this.servicoSelecionado = servico;

    this.agendamentoService.agendamento.servico = servico;
  }

// Função Para ir pra tela C2
  irParaProfissional() {
  if (this.servicoSelecionado) {
    this.router.navigate(['/cliente/agendar/profissional']);
  }
}
}


