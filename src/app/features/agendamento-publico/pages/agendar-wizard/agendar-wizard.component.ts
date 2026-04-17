import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicoCardComponent } from '../../components/servico-card/servico-card.component';
import { Servico } from '../../models/servico.model';

@Component({
  selector: 'app-agendar-wizard',
  standalone: true,
  imports: [CommonModule, ServicoCardComponent],
  templateUrl: './agendar-wizard.component.html',
  styleUrl: './agendar-wizard.component.scss',
})
export class AgendarWizardComponent {

  // controla o passo atual do fluxo (1 = serviço, 2 = funcionário, etc)
  passoAtual = 1;

  // lista de serviços exibida no passo 1
  // hoje mockado, depois deve vir da API (data-access)
  servicos: Servico[] = [
    { id: '1', nome: 'Corte Masculino', duracaoMin: 40, preco: 45, descricao: 'Tesoura e máquina' },
    { id: '2', nome: 'Barba Completa', duracaoMin: 30, preco: 35, descricao: 'Modelagem + navalha' },
    { id: '3', nome: 'Corte + Barba', duracaoMin: 70, preco: 75, descricao: 'Combo promocional' },
  ];

  // estado do wizard: serviço escolhido pelo usuário
  // null enquanto nada foi selecionado
  servicoSelecionado: Servico | null = null;

  // recebe evento do componente filho (ServicoCard)
  // responsabilidade: atualizar estado do wizard
  selecionarServico(servico: Servico): void {
    this.servicoSelecionado = servico;
  }

  // controla navegação entre passos
  // regra: só avança se tiver serviço selecionado
  irParaProximoPasso(): void {
    if (!this.servicoSelecionado) return;

    // próximo passo do fluxo (ex: seleção de funcionário)
    this.passoAtual = 2;
  }
}
