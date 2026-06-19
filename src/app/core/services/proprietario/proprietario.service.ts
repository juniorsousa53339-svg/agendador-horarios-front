
import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from '../../../core/services/auth.service';

import { DashboardResumo } from '../../../shared/models/DashboardResumo.model';

@Injectable({

providedIn: 'root'

})
export class ProprietarioService {

private http = inject(HttpClient);
private authService = inject(AuthService);

  private api = 'http://localhost:8080/proprietarios';
  private dashboardApi = 'http://localhost:8080/dashboard';

  criarProprietario(proprietario: any) {

    const headers = this.authService.getAuthHeaders();

    return this.http.post(
    this.api,
    proprietario , {headers}
    );
  }

  obterResumoDashboard() {

    const headers = this.authService.getAuthHeaders();

    return this.http.get<DashboardResumo>(`${this.dashboardApi}`, {headers});
  }

  }
