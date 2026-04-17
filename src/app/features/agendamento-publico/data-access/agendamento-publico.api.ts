import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ServicoDto } from './servico.dto';

@Injectable({ providedIn: 'root' })
export class AgendamentoPublicoApi {
  listarServicos(): Observable<ServicoDto[]> {
    // MOCK: substituir por HttpClient.get(...) no próximo passo
    const mock: ServicoDto[] = [
      { id: 1, nome_servico: 'Corte Masculino', duracao_minutos: 40, valor: 35, descricao: 'Tesoura e máquina' },
      { id: 2, nome_servico: 'Barba Completa', duracao_minutos: 30, valor: 25, descricao: 'Modelagem + navalha' },
      { id: 3, nome_servico: 'Corte + Barba', duracao_minutos: 70, valor: 75, descricao: 'Combo promoção' },
    ];
    return of(mock).pipe(delay(500));
  }
}
