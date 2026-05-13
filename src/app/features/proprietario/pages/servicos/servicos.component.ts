import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicosService } from '../../../../core/services/servicos/servicos.service';


@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {

  //  INJEÇÃO DO ROUTER (ESSENCIAL)
  constructor(private router: Router) {}

  //  MOCK DE SERVIÇOS
  servicos = [
    {
      id: 1,
      nome: 'Corte Masculino',
      duracao: '30 min',
      preco: 30
    },
    {
      id: 2,
      nome: 'Barba',
      duracao: '20 min',
      preco: 20
    }
  ];

  // ================= NOVO =================
  novoServico() {
    this.router.navigate(['/proprietario/servicos/novo']);
  }

  // ================= EDITAR =================
  editar(s: any) {
    this.router.navigate(['/proprietario/servicos/editar', s.id]);
  }

  // ================= EXCLUIR =================
  excluir(servico: any) {

    const confirmar = confirm(`Excluir ${servico.nome}?`);
    if (!confirmar) return;

    this.servicos = this.servicos.filter(s => s.id !== servico.id);
  }

  // ================= VOLTAR =================
  voltar() {
    this.router.navigate(['/proprietario/dashboard']);
  }

}
