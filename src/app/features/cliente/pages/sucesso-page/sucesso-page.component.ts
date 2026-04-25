import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucesso-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sucesso-page.component.html',
  styleUrls: ['./sucesso-page.component.scss']
})
export class SucessoPageComponent {

  carregando: boolean = true;

  constructor(private router: Router) {
    // simula carregamento
    setTimeout(() => {
      this.carregando = false;
    }, 2000); // 2 segundos
  }

  voltarInicio() {
    this.router.navigate(['/']);
  }
}
