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
    private proprietarioService: ProprietarioService
  ) {}


  funcionario = {
   nomeFuncionario: '',
   telefoneFuncionario: '',
    especialidade : '',
    email: '',
    senha: ''

}

  ngOnInit() {



    //  pega ID da rota
    const idFuncionario = this.route.snapshot.paramMap.get('id');
   



    console.log('ID do funcionário:', idFuncionario);

    this.proprietarioService.buscarFun( idFuncionario
    ).subscribe({
      next: (res) =>
       this.funcionario = res
    });

  }

  salvar() {

    console.log('Salvando:', this.funcionario);

    // FUTURO BACKEND

    this.proprietarioService.editarFuncionario(this.funcionario).subscribe({
      next: () =>



        this.router.navigate(['/proprietario/funcionarios/editar/'])


    });


    //  AGORA (simulação)
    this.router.navigate(['/proprietario/funcionarios']);
  }

  voltar() {
    this.router.navigate(['/proprietario/funcionarios']);
  }
}
