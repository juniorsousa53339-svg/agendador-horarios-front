
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServicoService } from '../../../cliente/services/servico.service';
import { Servico } from '../../../../shared/models/servico.model';
// Interface/tipo do serviço


@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent implements OnInit {


  servicos: Servico[] = []

  constructor(
    private router: Router,
    private servicoService : ServicoService

  ) {}


  ngOnInit() {
    this.servicoService.listarServicos().subscribe({

   next: (res) => {
    this.servicos = res;
   },
   error: (err) => {
    console.error('Erro',err);
   }
    });
  }

  novoServico() {
    this.router.navigate(['/proprietario/servicos/novo']);
  }

  // ================= EDITAR =================
  editar(servico: any) {
   console.log(servico.idServico);

   this.router.navigate(['/proprietario/servicos/editar', servico.idServico])
  }

  // ================= EXCLUIR =================
  excluir(servico: any) {
    console.log('Excluir serviço:', servico.nomeServico);

   this.servicoService.excluirServicos(servico.nomeServico).subscribe({

   next: () => {
    this.router.navigate(['/proprietario/servicos'])
   },
   erro: () => {

    console.error('Erro ao excluir')
   }
   });

  }

  voltar() {
    this.router.navigate(['/proprietario/dashboard']);
  }

}
