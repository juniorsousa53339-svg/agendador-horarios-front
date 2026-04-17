import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Servico } from '../../models/servico.model';

@Component({
  selector: 'app-servico-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './servico-card.component.html',
  styleUrl: './servico-card.component.scss',
})
export class ServicoCardComponent {
  @Input({ required: true }) servico!: Servico;
  @Input() selecionado = false;
  @Output() selecionar = new EventEmitter<Servico>();

  onClick(): void {
    this.selecionar.emit(this.servico);
  }
}
