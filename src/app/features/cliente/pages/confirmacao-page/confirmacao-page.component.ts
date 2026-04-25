import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  confirmar() {

    // validação simples
    if (!this.nome || !this.telefone) {
      this.erro = 'Preencha corretamente seu nome e telefone para continuar.';
      return;
    }

    // limpa erro
    this.erro = null;

    // simulação (depois vira backend)
    console.log('Agendamento confirmado:', {
      nome: this.nome,
      telefone: this.telefone
    });

    // navega pra tela final
    setTimeout(() => {
      this.router.navigate(['/cliente/agendar/sucesso']);
    }, 500);
  }
}
