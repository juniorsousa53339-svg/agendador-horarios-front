import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.scss'
})
export class FuncionariosComponent {


  // ================= LISTA MOCK (TEMPORÁRIO)
  funcionarios = [

    {
      id: 1,
    nome: 'joão silva',
    especialidade: 'corte Masculino',
    telefone: '(11) 99999-9999'

    },

     {
      id: 2,
    nome: 'Marcos',
    especialidade: 'corte Masculino',
    telefone: '(11) 94929-0909'

    },

     {
      id: 3,
    nome: 'Ronaldo',
    especialidade: 'corte + barba',
    telefone: '(11) 94309-1589'

    }
  ];

  constructor(private router: Router){}

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


  this.funcionarios = this.funcionarios.filter(f => f.id !== funcionario.id);

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
