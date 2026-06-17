import { FuncionarioService } from './../../../cliente/services/funcionario.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProprietarioService } from '../../../../core/services/proprietario/proprietario.service';
import { Funcionario } from './../../../../shared/models/funcionario.model';

@Component({
  selector: 'app-editar-funcionario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-funcionario.component.html',
  styleUrl: './editar-funcionario.component.scss'
})
export class EditarFuncionarioComponent {



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private funcionarioService: FuncionarioService
  ) {}


  funcionario = {
   nomeFuncionario: '',
   telefoneFuncionario: '',
    especialidade : '',
    email: '',
    senha: ''

}

  ngOnInit() {

    const idFuncionario = this.route.snapshot.paramMap.get('id');

    console.log('ID do funcionário:', idFuncionario);

    this.funcionarioService.buscarFun(  idFuncionario
    ).subscribe({
      next: (res) =>
       this.funcionario = res
    });

  }
  salvar() {

  console.log('Salvando:', this.funcionario);



    this.funcionarioService.editarFuncionario(this.funcionario).subscribe({
      next: () =>

       this.router.navigate(['/proprietario/funcionarios'])


    });

    this.router.navigate(['/proprietario/funcionarios']);
  }

  voltar() {
    this.router.navigate(['/proprietario/funcionarios']);
  }
}
