
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProprietarioService } from '../../../../core/services/proprietario/proprietario.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  //  MOCK (AGORA)
  totalServicos =  0;
  totalFuncionarios = 0;

  constructor(
    private router: Router,
    private proprietarioService: ProprietarioService
  ) {



}

  ngOnInit() {
    this.proprietarioService.obterResumoDashboard()

.subscribe({
   next: (res) => {

    console.log('Resposta da API:', res);

     this.totalServicos = res.totalServicos;
     this.totalFuncionarios = res.totalFuncionarios

   },
   error: (err) => {
    console.error('Erro:', err);
  }
  
});

  }

  menuAberto = false;

toggleMenu() {
  this.menuAberto = !this.menuAberto;
}

fecharMenu() {
  this.menuAberto = false;
}
irAgendamentos() {
  this.router.navigate(['/funcionario/agenda']);
}

irServicos() {
  this.router.navigate(['/proprietario/servicos']);
}

irFuncionarios() {
  this.router.navigate(['/proprietario/funcionarios']);
}

}
