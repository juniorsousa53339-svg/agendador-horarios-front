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
    nome: 'joão silva',
    especialidade: 'corte Masculino',
    telefone: '(11) 99999-9999'

    },

     {
    nome: 'Marcos',
    especialidade: 'corte Masculino',
    telefone: '(11) 94929-0909'

    },

     {
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
    console.log('Editar:', funcionario);

    //  FUTURO BACKEND:
    // this.router.navigate(['/proprietario/funcionarios/editar', funcionario.id]);
  }

  // ================= EXCLUIR
  excluir(funcionario: any) {
    console.log('Excluir:', funcionario);

    //  FUTURO BACKEND:
    // aqui você vai chamar API pra deletar
  }

}
