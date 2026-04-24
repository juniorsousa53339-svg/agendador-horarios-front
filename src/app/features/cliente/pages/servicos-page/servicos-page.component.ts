import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../../services/servico.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicos-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos-page.component.html',
  styleUrls: ['./servicos-page.component.scss']
})
export class ServicosPageComponent implements OnInit {

  servicos: any[] = [];

  constructor(private servicoService: ServicoService) { }

  ngOnInit() {
    this.servicoService.listar().subscribe({
      next: (data) => {
        this.servicos = data;
      },
      error: (err) => {
        console.error('Erro ao buscar serviços', err);
      }
    });
  }

  // Representa o serviço selecionado (inicialmente nenhum)
  servicoSelecionado: any = null;

  // Função chamada quando clicar no card
  selecionarServico(servico: any) {
    this.servicoSelecionado = servico;
  }
}


