import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ClienteService } from '../../services/cliente.service';
import { AgendamentoService } from '../../services/agendamento.service';

@Component({
  selector: 'app-confirmacao-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confirmacao-page.component.html',
  styleUrls: ['./confirmacao-page.component.scss']
})
export class ConfirmacaoPageComponent {

  nome: string = '';
  telefone: string = '';

  erro: string | null = null;

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private agendamentoService: AgendamentoService
  ) {}

  confirmar() {

    // validação simples
    if (!this.nome || !this.telefone) {

      this.erro =
        'Preencha corretamente seu nome e telefone para continuar.';

      return;
    }

    const telefoneRegex = /^\d{11}$/;

if (this.nome.trim().length < 3) {

  this.erro =
    'Nome deve ter pelo menos 3 caracteres.';

  return;
}

if (!telefoneRegex.test(this.telefone)) {

  this.erro =
    'Telefone deve ter exatamente 11 números.';

  return;
}


    this.erro = null;

    const cliente = {

      nomeCliente: this.nome,
      telefoneCliente: this.telefone

    };

    this.clienteService.criar(cliente).subscribe({

      next: (clienteCriado: any) => {

        console.log('Cliente criado:', clienteCriado);

        const agendamento = {

          idCliente: clienteCriado.idCliente,

          idFuncionario:
            this.agendamentoService.agendamento.funcionario.idFuncionario,

          idServico:
            this.agendamentoService.agendamento.servico.idServico,

          dataHoraAgendamento:
            this.agendamentoService.agendamento.dataHora

        };

        console.log('Agendamento:', agendamento);

        this.agendamentoService
  .criarAgendamento(agendamento)
  .subscribe({

    next: () => {

      console.log('Agendamento criado com sucesso');

      this.router.navigate(['/cliente/agendar/sucesso']);

    },

    error: () => {

      this.erro = 'Erro ao criar agendamento.';

    }

  });

      },

      error: () => {

        this.erro = 'Erro ao criar cliente.';

      }

    });

  }
}
