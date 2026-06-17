
import { ServicoService } from './../../../cliente/services/servico.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-servico',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './editar-servico.component.html',
  styleUrl: './editar-servico.component.scss'
})
export class EditarServicoComponent {



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicoService : ServicoService
  ) {}


  servico = {
    nomeServico: '',
    descricaoServico: '',
    precoServico: 0,
    duracaoMinutos: 0,
  };

  ngOnInit() {
    const idServico = this.route.snapshot.paramMap.get('id');

    console.log('Editando serviço ID:', idServico);

    this.servicoService.buscarServicos(idServico
    ).subscribe ({
      next: (res) =>
        this.servico = res
    });
  }

  salvar() {
    console.log('Salvando serviço:', this.servico);


   this.servicoService.editarServicos(this.servico).subscribe({
   next: () =>

  this.router.navigate(['/proprietario/servicos'])


  });

 this.router.navigate(['/proprietario/servicos'])
}

  voltar() {
    this.router.navigate(['/proprietario/servicos']);
  }

}
