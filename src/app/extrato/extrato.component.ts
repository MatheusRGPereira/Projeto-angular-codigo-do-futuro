import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs';
import { Transacao } from './extrato.interface';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  transacoes: Array<Transacao>;
  pagina = 1


  estaCarregando: boolean;
  notFound: boolean;

  constructor(
    private extratoService: ExtratoService
  ) {
    console.log(extratoService)
  }

  ngOnInit(): void {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.estaCarregando = true
    this.notFound = false;

    this.extratoService.getTransacoes(this.pagina)
    .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
      .subscribe(response => this.onSucesso(response),
        error => this.onError(error)
      );
  }

  onSucesso(response: Transacao[]) {
    this.transacoes = response
  }

  onError(error: any) {
    this.notFound = true;
    console.error(error)
  }

  proximaPagina(){
    this.pagina = this.pagina + 1;
    this.carregarExtrato();
  }
  paginaAnterior(){
    this.pagina = this.pagina - 1;
    this.carregarExtrato();
  }

}
