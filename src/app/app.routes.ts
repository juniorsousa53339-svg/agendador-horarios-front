import { Routes } from '@angular/router';
import { ServicosPageComponent } from './features/cliente/pages/servicos-page/servicos-page.component';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cliente/agendar/servicos',
    pathMatch: 'full'
  },
  {
    path: 'cliente/agendar/servicos',
    component: ServicosPageComponent
  },
  {
    path: 'proprietario/dashboard',
    component: ServicosPageComponent, // só teste por enquanto
    canActivate: [authGuard, roleGuard],
    data: { role: 'ROLE_PROPRIETARIO' }
  }
];
