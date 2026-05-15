import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Interface/tipo do serviço
interface Servico {
  id: number;
  nome: string;
  duracao: string;
  preco: number;
}

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {

  // ================= MOCK DOS SERVIÇOS =================
  servicos: Servico[] = [
    {
      id: 1,
      nome: 'Corte Masculino',
      duracao: '45 min',
      preco: 45
    },
    {
      id: 2,
      nome: 'Barba',
      duracao: '30 min',
      preco: 30
    },
    {
      id: 3,
      nome: 'Combo Corte + Barba',
      duracao: '1h 15min',
      preco: 70
    },
    {
      id: 4,
      nome: 'Sobrancelha',
      duracao: '20 min',
      preco: 20
    }
  ];

  constructor(private router: Router) {}

  // ================= NOVO =================
  novoServico() {
    this.router.navigate(['/proprietario/servicos/novo']);
  }

  // ================= EDITAR =================
  editar(servico: Servico) {
    this.router.navigate([
      '/proprietario/servicos/editar',
      servico.id
    ]);
  }

  // ================= EXCLUIR =================
  excluir(servico: Servico) {
    console.log('Excluir serviço:', servico);
  }

  // ================= VOLTAR =================
  voltar() {
    this.router.navigate(['/proprietario/dashboard']);
  }

}
