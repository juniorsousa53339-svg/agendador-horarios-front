import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({

providedIn: 'root'

})
export class ProprietarioService {

private http = inject(HttpClient);

  private api = 'http://localhost:8080/proprietarios';

  criarProprietario(proprietario: any) {

    return this.http.post(
    this.api,
    proprietario
    );
  }

  }
