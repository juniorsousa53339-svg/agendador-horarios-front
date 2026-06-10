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


  nomeFuncionario = '';
  especialidade = '';
  telefoneFuncionario = '';

  constructor(
    private router: Router ,
    private proprietarioService: ProprietarioService
  ){}

   ngOnInit() {
    this.proprietarioService.listarFuncionarios()

.subscribe({
   next: (res) => {

    console.log('Resposta da API:', res);

     this.nomeFuncionario = res.nomeFuncionario; // Exemplo de como acessar o nome do funcionário
     this.especialidade = res.especialidade; // Exemplo de como acessar a especialidade do funcionário
     this.telefoneFuncionario = res.telefoneFuncionario; // Exemplo de como acessar o telefone do funcionário

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
  console.log('Clicou em editar', funcionario);

  this.router.navigate(['/proprietario/funcionarios/editar/:id']);


    //  FUTURO BACKEND:
    // this.router.navigate(['/proprietario/funcionarios/editar', funcionario.id]);
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
