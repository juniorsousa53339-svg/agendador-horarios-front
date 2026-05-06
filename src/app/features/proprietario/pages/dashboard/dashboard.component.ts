import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  //  MOCK (AGORA)
  totalAgendamentos = 12;
  totalServicos = 5;
  totalFuncionarios = 3;

  constructor( private router: Router) { }



    //  FUTURO (BACKEND)
    /*
    this.dashboardService.getResumo().subscribe({
      next: (res) => {
        this.totalAgendamentos = res.agendamentosHoje;
        this.totalServicos = res.servicosAtivos;
        this.totalFuncionarios = res.funcionarios;
      },
      error: (err) => {
        console.error('Erro ao carregar dashboard', err);
      }
    });
    */



  
  ngOnInit() {
    console.log('DASHBOARD DO PROPRIETÁRIO ABRIU');
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
  this.router.navigate(['/cliente/agendar/servicos']);
}

irFuncionarios() {
  this.router.navigate(['/proprietario/funcionarios']);
}

irConfiguracoes() {
  this.router.navigate(['/configuracoes']);
}

}
