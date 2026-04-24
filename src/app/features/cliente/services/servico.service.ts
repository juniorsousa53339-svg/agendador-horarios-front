import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  /**
   * Simula resposta do backend com todos os campos importantes
   */
  listar(): Observable<any[]> {

    const servicos = [
      {
        nomeServico: 'Corte de cabelo',
        descricaoServico: 'Corte moderno com acabamento profissional',
        precoServico: 30,
        duracaoMinutos: 30
      },
      {
        nomeServico: 'Barba',
        descricaoServico: 'Modelagem completa da barba',
        precoServico: 20,
        duracaoMinutos: 20
      },
      {
        nomeServico: 'Corte + Barba',
        descricaoServico: 'Pacote completo com desconto',
        precoServico: 45,
        duracaoMinutos: 50
      }
    ];

    return of(servicos);
  }
}
