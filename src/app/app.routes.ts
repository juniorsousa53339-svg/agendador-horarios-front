import { Routes } from '@angular/router';
import { AGENDAMENTO_PUBLICO_ROUTES } from './features/agendamento-publico/agendamento-publico.routes';

export const routes: Routes = [
  ...AGENDAMENTO_PUBLICO_ROUTES,
  { path: '**', redirectTo: '' },
];
