import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  //  Aqui vão ficar os dados digitados pelo usuário (ligados ao HTML com ngModel)
  email: string = '';
  senha: string = '';

  //  Aqui você pode exibir erros vindos do backend futuramente
  erro: string | null = null;

  constructor(private router: Router) {}

  login() {

    //  VALIDAÇÃO FRONT (ANTES DE IR PRO BACKEND)
    // Aqui você evita requisição desnecessária
    if (!this.email || !this.senha) {
      this.erro = 'Preencha todos os campos';
      return;
    }

    this.erro = null;

    // AQUI VAI SER SUBSTITUÍDO PELO BACKEND
    // No futuro você vai chamar um serviço tipo:
    // this.authService.login(this.email, this.senha).subscribe(...)

    //  MOCK TEMPORÁRIO (simulação)
    const tipo = 'FUNCIONARIO';

    //  AQUI VAI CONTINUAR EXISTINDO (mesmo com backend)
    // Só que o "tipo" vai vir da API
    if (tipo === 'FUNCIONARIO') {
      this.router.navigate(['/funcionario/agenda']);
    } else {
      this.router.navigate(['/proprietario/dashboard']);
    }
  }
}
