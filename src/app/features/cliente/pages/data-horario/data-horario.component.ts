import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-horario-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-horario.component.html',
  styleUrls: ['./data-horario.component.scss']
})
export class DataHorarioPageComponent {

  // lista de horários (mock)
  horarios: string[] = [
    '08:00','08:30','09:00',
    '09:30','10:00','10:30',
    '11:00','11:30','13:00',
    '15:00','15:30','16:00',
    '16:30','17:00','17:30',
    '18:00','18:30','19:00'
  ];

  // horário selecionado
  horarioSelecionado: string | null = null;

  // mensagem de erro (simulando backend)
  erro: string | null = null;

  // função ao clicar no horário
  selecionarHorario(h: string) {

    this.horarioSelecionado = h;

    // simulação de erro
    if (h === '10:00') {
      this.erro = 'Horário já reservado. Por favor, escolha outra opção disponível.';
    } else {
      this.erro = null;
    }
  }
    constructor(private router: Router) {}
    irParaConfirmacao() {
  this.router.navigate(['/cliente/agendar/confirmacao']);
}
}
