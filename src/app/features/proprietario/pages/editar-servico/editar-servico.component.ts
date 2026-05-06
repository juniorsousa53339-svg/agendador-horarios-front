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

  servico: any = {
    id: null,
    nome: '',
    duracao: '',
    preco: null
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    console.log('Editando serviço ID:', id);

    //  MOCK POR ENQUANTO
    this.servico = {
      id: id,
      nome: 'Corte Masculino',
      duracao: '30 min',
      preco: 30
    };

    //  FUTURO (BACKEND)
    /*
    this.servicoService.getById(id).subscribe(res => {
      this.servico = res;
    });
    */
  }

  salvar() {
    console.log('Salvando serviço:', this.servico);

    //  FUTURO BACKEND
    /*
    this.servicoService.update(this.servico).subscribe(() => {
      this.router.navigate(['/proprietario/servicos']);
    });
    */

    this.router.navigate(['/proprietario/servicos']);
  }

  voltar() {
    this.router.navigate(['/proprietario/servicos']);
  }

}
