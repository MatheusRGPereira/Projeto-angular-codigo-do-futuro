import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, tap, throwError } from 'rxjs';
import { AuthService } from '../shared/services/auth/auth.service';
import { LoginResponse } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  public logar(email: string, senha: string) : Observable<LoginResponse> {

    if (email === 'matheusgaldinoinfo@gmail.com' && senha === '12345678') {
      return of({
        usuario: {
          nome: 'Matheus',
          sobrenome: 'Rodrigues',
          email: 'matheusgaldinoinfo@gmail.com',
        },
        token: 'fA54asifjAasG8fjfGaiSViNufas'
      })
        .pipe(
          delay(2000),
          tap((response) => {
            this.authService.setUsuario(response.usuario)
            this.authService.setToken(response.token)
          })
        );
    }
    return throwError("Usuario ou Senha incorretos.")

  }
}
