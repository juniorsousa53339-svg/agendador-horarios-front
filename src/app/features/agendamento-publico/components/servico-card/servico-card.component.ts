import { CurrencyPipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Servico } from '../../models/servico.model';

@Component({
  selector: 'app-servico-card', // usado no HTML: <app-servico-card>
  standalone: true, // componente independente (sem NgModule)
  imports: [CurrencyPipe, NgIf], // usado para formatar preço no template
  templateUrl: './servico-card.component.html',
  styleUrl: './servico-card.component.scss'
})
export class ServicoCardComponent {

  //  Dados do serviço (vem do componente pai)
  // obrigatório para renderizar o card
  @Input({ required: true }) servico!: Servico;

  //  Controla estado visual (selecionado ou não)
  // usado para aplicar estilo (ex: borda ativa)
  @Input() selecionado = false;

  //  Evento disparado ao clicar no card
  // envia o serviço selecionado para o componente pai
  @Output() selecionar = new EventEmitter<Servico>();

  //  Handler de clique
  // responsabilidade: apenas emitir o evento (sem lógica de negócio)
  onSelecionar(): void {
    this.selecionar.emit(this.servico);
  }
}
