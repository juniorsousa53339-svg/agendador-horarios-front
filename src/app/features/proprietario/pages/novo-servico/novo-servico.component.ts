import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-novo-servico',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './novo-servico.component.html',
  styleUrls: ['./novo-servico.component.scss']
})
export class NovoServicoComponent {

  constructor(private router: Router) {}

  servico = {
    nome: '',
    duracao: '',
    preco: 0
  };

  salvar() {
    console.log('Serviço salvo:', this.servico);

    //  FUTURO BACKEND
    /*
    this.servicoService.criar(this.servico).subscribe(() => {
      this.router.navigate(['/proprietario/servicos']);
    });
    */

    // MOCK
    this.router.navigate(['/proprietario/servicos']);
  }

  voltar() {
    this.router.navigate(['/proprietario/servicos']);
  }
}
