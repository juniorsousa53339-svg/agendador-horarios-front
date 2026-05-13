import { Servico } from './../../../../shared/models/servico.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServicoService } from '../../services/servico.service';



@Component({
  selector: 'app-servicos-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos-page.component.html',
  styleUrls: ['./servicos-page.component.scss']
})
export class ServicosPageComponent implements OnInit {

  servicos: Servico[] = [];

  constructor(private servicoService: ServicoService,private router: Router) { }


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
 servicoSelecionado: Servico | null = null;

  // Função chamada quando clicar no card
  selecionarServico(servico: any) {
    this.servicoSelecionado = servico;
  }

// Função Para ir pra tela C2
  irParaProfissional() {
  if (this.servicoSelecionado) {
    this.router.navigate(['/cliente/agendar/profissional']);
  }
}
}


