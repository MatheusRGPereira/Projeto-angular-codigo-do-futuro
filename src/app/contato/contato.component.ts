import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs';
import { Contato } from './contato';
import { ContatoService } from './contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contatos: Contato[]

  estaCarregando: boolean;
  notFound: boolean;

  constructor(
    private contatoService: ContatoService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getContato();
  }

  getContato() {
    this.estaCarregando = true
    this.notFound = false;

    this.contatoService.getContato()
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(response => this.onSucesso(response),
        error => this.onError(error)
      )
  }

  onSucesso(response: Contato[]) {
    this.contatos = response
  }

  onError(error: any) {
    this.notFound = true;
    console.error(error)
  }

  goToDetails(idContato: string){
    this.router.navigate([`contatos/${idContato}`])
  }

}
