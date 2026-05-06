import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-funcionario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './novo-funcionario.component.html',
  styleUrl: './novo-funcionario.component.scss'
})
export class NovoFuncionarioComponent {

  constructor(private router: Router) {}

  //  FORM (mock por enquanto)
  form = {
    nome: '',
    telefone: '',
    especialidade: ''
  };

  voltar() {
    this.router.navigate(['/proprietario/funcionarios']);
  }

  salvar() {

    // VALIDAÇÃO SIMPLES
    if (!this.form.nome || !this.form.telefone || !this.form.especialidade) {
      alert('Preencha todos os campos');
      return;
    }

    // BACKEND FUTURO
    /*
    this.funcionarioService.criar(this.form).subscribe({
      next: () => {
        this.router.navigate(['/proprietario/sucesso'], {
          state: { mensagem: 'Funcionário criado com sucesso!' }
        });
      },
      error: (err) => {
        console.error(err);
      }
    });
    */

    //  MOCK (por enquanto)
    console.log('Salvando funcionário:', this.form);

    this.router.navigate(['/proprietario/funcionarios']);
  }
}
