import { Routes } from '@angular/router';
import { ServicosPageComponent } from './features/cliente/pages/servicos-page/servicos-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cliente/agendar/servicos',
    pathMatch: 'full'
  },
  {
    path: 'cliente/agendar/servicos',
    component: ServicosPageComponent
  }
];
