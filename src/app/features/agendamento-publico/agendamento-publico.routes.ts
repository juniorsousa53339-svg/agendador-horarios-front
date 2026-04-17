import { Routes } from '@angular/router';
import { LoadingComponent } from './pages/loading/loading.component';
import { AgendarWizardComponent } from './pages/agendar-wizard/agendar-wizard.component';

export const AGENDAMENTO_PUBLICO_ROUTES: Routes = [
  { path: '', component: LoadingComponent },
  { path: 'agendar', component: AgendarWizardComponent },
];
