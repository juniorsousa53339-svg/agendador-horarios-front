
import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { DashboardResumo } from '../../../shared/models/DashboardResumo.model';

@Injectable({

providedIn: 'root'

})
export class ProprietarioService {

private http = inject(HttpClient);

  private api = 'http://localhost:8080/proprietarios';
  private dashboardApi = 'http://localhost:8080/dashboard';

  criarProprietario(proprietario: any) {

    return this.http.post(
    this.api,
    proprietario
    );
  }

  obterResumoDashboard() {
    return this.http.get<DashboardResumo>(`${this.dashboardApi}`);
  }

  }
