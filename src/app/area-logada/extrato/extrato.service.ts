import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, Observable, throwError, timer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transacao } from './extrato.interface';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  public getTransacoes(page: number){
    //Simular erro
    // const error = throwError("Erro genérico");
    // return timer(3000).pipe(mergeMap(() => error))

    return this.http.get<Transacao[]>(`${this.API_URL}/transacoes`,{
      params: {
        _page: String(page),
      }
    })

  }
}
