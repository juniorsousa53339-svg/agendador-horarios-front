import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { AgendamentoPublicoFacade } from '../../data-access/agendamento-publico.facade';
import { ServicoCardComponent } from '../../components/servico-card/servico-card.component';
import { Servico } from '../../models/servico.model';

@Component({
  selector: 'app-agendar-wizard',
  standalone: true,
  imports: [CommonModule, AsyncPipe, ServicoCardComponent],
  templateUrl: './agendar-wizard.component.html',
  styleUrl: './agendar-wizard.component.scss',
})
export class AgendarWizardComponent implements OnInit {
  readonly facade = inject(AgendamentoPublicoFacade);

  readonly state$ = this.facade.state$;
  readonly servicos$ = this.facade.servicos$;
  readonly loading$ = this.facade.loading$;
  readonly erro$ = this.facade.erro$;

  ngOnInit(): void {
    this.facade.carregarServicos();
  }

  selecionarServico(servico: Servico): void {
    this.facade.selecionarServico(servico);
  }

  proximoPasso(): void {
    this.facade.proximoPasso();
  }
}
