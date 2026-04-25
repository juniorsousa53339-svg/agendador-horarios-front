import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profissional-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profissional-page.component.html',
  styleUrl: './profissional-page.component.scss'
})
export class ProfissionalPageComponent {

   //  MOCK: simula dados vindos do backend (depois vira API)
  profissionais = [
  {
    nome: 'Luciano Júnior',
    especialidade: 'Corte masculino'
  },
  {
    nome: 'Gabriel Souza',
    especialidade: 'Barba'
  },
  {
    nome: 'Marcos',
    especialidade: 'Corte e barba'
  }
];

 //  guarda o profissional que o usuário clicou
profissionalSelecionado: any = null;

//  chamado quando o usuário clica em um card
selecionarProfissional(profissional: any) {
  this.profissionalSelecionado = profissional;
}
constructor(private router: Router) {}

// chamada ao clicar no botão
irParaDataHorario() {



  // valida se escolheu alguém
  if (!this.profissionalSelecionado) return;

  // navega pra próxima tela
  this.router.navigate(['/cliente/agendar/data-horario']);
}
}
