import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

    // depois a gente navega ou mostra sucesso
  }
}
