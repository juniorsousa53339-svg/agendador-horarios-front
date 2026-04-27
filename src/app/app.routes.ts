import { Routes } from '@angular/router';

// ===== CLIENTE =====
import { ServicosPageComponent } from './features/cliente/pages/servicos-page/servicos-page.component';
import { ProfissionalPageComponent } from './features/cliente/pages/profissional-page/profissional-page.component';
import { DataHorarioPageComponent } from './features/cliente/pages/data-horario/data-horario.component';
import { ConfirmacaoPageComponent } from './features/cliente/pages/confirmacao-page/confirmacao-page.component';
import { SucessoPageComponent } from './features/cliente/pages/sucesso-page/sucesso-page.component';

// ===== CORE =====
import { SplashScreenComponent } from './core/splash/splash-screen/splash-screen.component';
import { LoginComponent } from './core/auth/login/login.component';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

// ===== FUNCIONÁRIO =====
import { AgendaFuncionarioComponent } from './features/funcionario/pages/agenda/agenda.component';

// ===== PROPRIETARIO =====
import { DashboardComponent } from './features/proprietario/pages/dashboard/dashboard.component';

export const routes: Routes = [

  // ===== SPLASH =====
  {
    path: '',
    component: SplashScreenComponent,
    pathMatch: 'full'
  },

  // ===== LOGIN =====
  {
    path: 'login',
    component: LoginComponent
  },

  // ===== CLIENTE =====
  {
    path: 'cliente/agendar/servicos',
    component: ServicosPageComponent
  },
  {
    path: 'cliente/agendar/profissional',
    component: ProfissionalPageComponent
  },
  {
    path: 'cliente/agendar/data-horario',
    component: DataHorarioPageComponent
  },
  {
    path: 'cliente/agendar/confirmacao',
    component: ConfirmacaoPageComponent
  },
  {
    path: 'cliente/agendar/sucesso',
    component: SucessoPageComponent
  },

  // ===== FUNCIONÁRIO =====
  {
    path: 'funcionario/agenda',
    component: AgendaFuncionarioComponent,
     //canActivate: [authGuard, roleGuard],
     //data: { role: 'ROLE_FUNCIONARIO' }
  },

  // ===== PROPRIETÁRIO =====
  {
  path: 'proprietario/dashboard',
  component: DashboardComponent, 
  // canActivate: [authGuard, roleGuard],
  data: { role: 'ROLE_PROPRIETARIO' }
},

  // ===== REDIRECIONAMENTO FINAL =====
  {
  path: '**',
  redirectTo: 'cliente/agendar/servicos'
}
];
