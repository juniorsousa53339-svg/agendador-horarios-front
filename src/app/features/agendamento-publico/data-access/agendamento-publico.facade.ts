import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs';
import { WizardState } from '../models/wizard-state.model';
import { Servico } from '../models/servico.model';
import { AgendamentoPublicoApi } from './agendamento-publico.api';
import { mapServicoDtoToModel } from './servico.mapper';

@Injectable({ providedIn: 'root' })
export class AgendamentoPublicoFacade {

  // serviço responsável por chamar o backend
  private readonly api = inject(AgendamentoPublicoApi);

  // estado principal do wizard (fluxo de agendamento)
  private readonly stateSubject = new BehaviorSubject<WizardState>({
    passoAtual: 1,
    servicoSelecionado: null,
  });

  // expõe estado como observable (somente leitura)
  readonly state$ = this.stateSubject.asObservable();

  // lista de serviços exibida na tela
  private readonly servicosSubject = new BehaviorSubject<Servico[]>([]);
  readonly servicos$ = this.servicosSubject.asObservable();

  // controle de loading (ex: spinner)
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  readonly loading$ = this.loadingSubject.asObservable();

  // controle de erro para exibir na UI
  private readonly erroSubject = new BehaviorSubject<string | null>(null);
  readonly erro$ = this.erroSubject.asObservable();

  // busca serviços na API
  carregarServicos(): void {
    this.loadingSubject.next(true); // inicia loading
    this.erroSubject.next(null);    // limpa erro anterior

    this.api.listarServicos().pipe(

      // converte DTO da API para model da UI
      map((dtos) => dtos.map(mapServicoDtoToModel)),

      // salva lista no estado
      tap((servicos) => this.servicosSubject.next(servicos)),

      // tratamento de erro
      catchError(() => {
        this.erroSubject.next('Não foi possível carregar os serviços.');
        return of([]); // evita quebrar fluxo
      }),

      // finaliza loading
      tap(() => this.loadingSubject.next(false))

    ).subscribe(); // executa a requisição
  }

  // atualiza serviço selecionado no estado
  selecionarServico(servico: Servico): void {
    this.patchState({ servicoSelecionado: servico });
  }

  // controla avanço de passo do wizard
  proximoPasso(): void {
    const current = this.stateSubject.value;

    // regra: não pode avançar sem selecionar serviço
    if (current.passoAtual === 1 && !current.servicoSelecionado) return;

    this.patchState({ passoAtual: 2 });
  }

  // atualiza parcialmente o estado (imutável)
  private patchState(patch: Partial<WizardState>): void {
    this.stateSubject.next({
      ...this.stateSubject.value,
      ...patch,
    });
  }
}
