import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
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

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }



  login() {

    this.authService
      .autenticar(this.email, this.senha)
      .subscribe({
        next: (usuario) => {

          this.authService.setUser(usuario);

          if (usuario.roles.includes('ROLE_FUNCIONARIO')) {

            this.router.navigate(['/funcionario/agenda']);

          } else if (usuario.roles.includes('ROLE_PROPRIETARIO')) {

            this.router.navigate(['/proprietario/dashboard']);
          }
        },
        error: () => {
          this.erro = 'Email ou senha inválidos';
        }
      });
  }
}
