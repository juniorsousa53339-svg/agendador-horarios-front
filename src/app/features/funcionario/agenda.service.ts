
import {  inject,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private http = inject(HttpClient);
    private authService = inject(AuthService);


 private apiUrl = `${environment.apiUrl}/agendamentos/funcionarios`;

  buscarAgendaFuncionario(idFuncionario: string, dataHora: string){

    const headers = this.authService.getAuthHeaders();

    return this.http.get(

       `${this.apiUrl}/${idFuncionario}/agendamentos?dataHora=${dataHora} `,{headers}
    );
  }

}


