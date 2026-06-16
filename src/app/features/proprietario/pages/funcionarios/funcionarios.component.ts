import { Funcionario } from './../../../../shared/models/funcionario.model';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProprietarioService } from '../../../../core/services/proprietario/proprietario.service';


@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.scss'
})
export class FuncionariosComponent implements OnInit {

  funcionario: Funcionario[] = [];

  constructor(
    private router: Router ,
    private proprietarioService: ProprietarioService,


  ){}

   ngOnInit() {
    this.proprietarioService.listarFuncionarios().subscribe({

   next: (res) => {

   this.funcionario = res;

   },
   error: (err) => {
    console.error('Erro:', err);
  }
});

}

       voltar() {
         this.router.navigate(['/proprietario/dashboard']);
       }



  novoFuncionario() {
    this.router.navigate(['/proprietario/funcionarios/novo']);
  }

 
  editar(funcionario: any) {
 console.log(funcionario.idFuncionario);


 this.router.navigate(['/proprietario/funcionarios/editar', funcionario.idFuncionario]);
  }

  excluir(funcionario: any ) {


  console.log('Funcionário removido:', funcionario.nomeFuncionario);


  this.proprietarioService.excluirFuncionario(funcionario.nomeFuncionario).subscribe({
    next: () => {
      this.router.navigate(['/proprietario/funcionarios']);
    },
    error: (err) => {
      console.error('Erro ao excluir', err);
    }
  });

}

}
