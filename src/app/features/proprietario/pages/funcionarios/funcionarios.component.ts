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
       // ================= BOTÃO VOLTAR
       voltar() {
         this.router.navigate(['/proprietario/dashboard']);
       }


        // ================= NOVO FUNCIONÁRIO
  novoFuncionario() {
    this.router.navigate(['/proprietario/funcionarios/novo']);
  }

  // ================= EDITAR
  editar(funcionario: any) {
 console.log(funcionario.idFuncionario);


 this.router.navigate(['/proprietario/funcionarios/editar', funcionario.idFuncionario]);
  }

  excluir(funcionario: any) {


  const confirmar = confirm(`Deseja excluir ${funcionario.nome}?`);

  if (!confirmar) return;


  // this.funcionarios = this.funcionarios.filter(f => f.id !== funcionario.id);

  console.log('Funcionário removido:', funcionario);

  //  FUTURO BACKEND
  /*
  this.funcionarioService.excluir(funcionario.id).subscribe({
    next: () => {
      this.funcionarios = this.funcionarios.filter(f => f.id !== funcionario.id);
    },
    error: (err) => {
      console.error('Erro ao excluir', err);
    }
  });
  */
}

}
