import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-funcionario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-funcionario.component.html',
  styleUrl: './editar-funcionario.component.scss'
})
export class EditarFuncionarioComponent {

  funcionario: any = {
    nome: '',
    telefone: '',
    especialidade: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    //  pega ID da rota
    const id = this.route.snapshot.paramMap.get('id');

    console.log('ID do funcionário:', id);

    //  MOCK (AGORA)
    this.funcionario = {
      nome: 'João Silva',
      telefone: '(11) 99999-9999',
      especialidade: 'Corte Masculino'
    };

    //  FUTURO BACKEND
    /*
    this.funcionarioService.buscarPorId(id).subscribe({
      next: (res) => this.funcionario = res
    });
    */
  }

  salvar() {

    console.log('Salvando:', this.funcionario);

    // FUTURO BACKEND
    /*
    this.funcionarioService.atualizar(this.funcionario).subscribe({
      next: () => this.router.navigate(['/proprietario/funcionarios'])
    });
    */

    //  AGORA (simulação)
    this.router.navigate(['/proprietario/funcionarios']);
  }

  voltar() {
    this.router.navigate(['/proprietario/funcionarios']);
  }
}
