import { ServicoService } from './../../../cliente/services/servico.service';
import { FuncionarioService } from './../../../cliente/services/funcionario.service';
import { Servico } from './../../../../shared/models/servico.model';
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

servico : Servico = {

  nomeServico: '',

  descricaoServico: '',

  precoServico: 0,

  duracaoMinutos: 0
  };

  constructor(
    private router: Router,
    private servicoService : ServicoService
  ) {}



  salvar() {
    this.servicoService.criarServicos(this.servico).subscribe({
   next: () => {
   this.router.navigate(['/proprietario/servicos']);
 },
   error: () => {

    console.error('Erro')
   }
    });

  }

  voltar() {
    this.router.navigate(['/proprietario/servicos']);
  }
}
