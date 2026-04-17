import { Servico } from './servico.model';

export interface WizardState {
  passoAtual: 1 | 2 | 3 | 4 | 5;
  servicoSelecionado: Servico | null;
}
