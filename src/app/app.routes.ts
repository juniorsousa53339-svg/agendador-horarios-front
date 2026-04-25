import { Routes } from '@angular/router';
import { ServicosPageComponent } from './features/cliente/pages/servicos-page/servicos-page.component';
import { ProfissionalPageComponent } from './features/cliente/pages/profissional-page/profissional-page.component';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { DataHorarioPageComponent } from './pages/cliente/data-horario/data-horario.component';
import { ConfirmacaoPageComponent } from './features/cliente/pages/confirmacao-page/confirmacao-page.component';
import { SucessoPageComponent } from './features/cliente/pages/sucesso-page/sucesso-page.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cliente/agendar/servicos',
    pathMatch: 'full'
  },
  {
    path: 'cliente/agendar/servicos',
    component: ServicosPageComponent,
    data: { animation: 'servicos' }
  },
  {
    path: 'proprietario/dashboard',
    component: ServicosPageComponent, // só teste por enquanto
    canActivate: [authGuard, roleGuard],
    data: { role: 'ROLE_PROPRIETARIO' }
  },
  {
    path: 'cliente/agendar/profissional',
    component: ProfissionalPageComponent,
    data: { animation: 'servicos' }
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
}
];
