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

  // ==========================
  // VALIDAÇÃO BÁSICA
  // ==========================
  if (!this.email || !this.senha) {
    this.erro = 'Preencha todos os campos';
    return;
  }

  this.erro = null;

  // ==========================
  // MOCK DE USUÁRIOS (SIMULANDO BACKEND)
  // ==========================
  const usuariosMock = [
    {
      email: 'proprietario@alfatech.com',
      senha: '123456',
      role: 'PROPRIETARIO'
    },
    {
      email: 'funcionario@alfatech.com',
      senha: '123456',
      role: 'FUNCIONARIO'
    }
  ];

  // ==========================
  // VERIFICA LOGIN
  // ==========================
  const usuarioEncontrado = usuariosMock.find(
    u => u.email === this.email && u.senha === this.senha
  );

  // ==========================
  // LOGIN INVÁLIDO
  // ==========================
  if (!usuarioEncontrado) {
    this.erro = 'Email ou senha inválidos';
    return;
  }

  // ==========================
  // REDIRECIONAMENTO POR ROLE
  // ==========================
  if (usuarioEncontrado.role === 'FUNCIONARIO') {

    // funcionário → agenda dele
    this.router.navigate(['/funcionario/agenda']);

  } else if (usuarioEncontrado.role === 'PROPRIETARIO') {

    // proprietário → dashboard admin
   this.router.navigateByUrl('/proprietario/dashboard');
  }
}
}
