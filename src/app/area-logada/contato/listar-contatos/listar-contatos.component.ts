import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs';
import { Contato } from '../contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.css']
})
export class ListarContatoComponent implements OnInit {

  contatos: Contato[]

  estaCarregando: boolean;
  notFound: boolean;

  constructor(
    private contatoService: ContatoService,
    private router : Router,
    private route : ActivatedRoute,
    private toastr: ToastrService,
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
    this.router.navigate([`/contatos/${idContato}`])
  }
  deletarContato(idContato: string){
    this.contatoService.deleteContato(idContato)
    .subscribe(
      response => this.onSuccessDeleteContato(idContato),
      error => this.onErrorDeleteContato(),
    );
  }

  onSuccessDeleteContato(idContato: string){
  this.toastr.success("Sucesso!", 'Contato deletado com sucesso')
  this.contatos = this.contatos.filter(contato => contato.id !== idContato)
  }

  onErrorDeleteContato(){
    console.log("deletado")
  }

  novoContato(){
    this.router.navigate(['contatos/novo']);
  }

  editarContato(idContato: string){
    this.router.navigate([`contatos/${idContato}/editar`])
  }

}
