
import {  inject,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private http = inject(HttpClient);
    private authService = inject(AuthService);


 private apiUrl = 'http://localhost:8080/agendamentos/funcionarios';

  buscarAgendaFuncionario(idFuncionario: string, dataHora: string){

    const headers = this.authService.getAuthHeaders();

    return this.http.get(

       `${this.apiUrl}/${idFuncionario}/agendamentos?dataHora=${dataHora} `,{headers}
    );
  }

}


