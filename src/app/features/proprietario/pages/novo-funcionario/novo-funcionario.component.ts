import { FuncionarioService } from './../../../cliente/services/funcionario.service';

import { Funcionario } from './../../../../shared/models/funcionario.model';
import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProprietarioService } from '../../../../core/services/proprietario/proprietario.service';

@Component({
  selector: 'app-novo-funcionario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './novo-funcionario.component.html',
  styleUrl: './novo-funcionario.component.scss'
})
export class NovoFuncionarioComponent {

 funcionario: Funcionario = {

  nomeFuncionario: '',
  telefoneFuncionario: '',
  especialidade: '',
  email: '',
  senha: ''
 };




  constructor(
    private router: Router,
    private proprietarioService: ProprietarioService,
    private funcionarioService: FuncionarioService

  ) {}

  cria() {
    this.funcionarioService.criar(this.funcionario).subscribe({
      next: () => {
        this.router.navigate(['/proprietario/funcionarios']);
      },
      error: () => {
        console.error('Erro:');
      }
    });
  }

  voltar() {
    this.router.navigate(['/proprietario/funcionarios']);
  }
}
