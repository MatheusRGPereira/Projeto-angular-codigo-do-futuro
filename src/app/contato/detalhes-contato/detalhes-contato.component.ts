import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs';
import { Contato } from '../contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.css']
})
export class DetalhesContatoComponent implements OnInit {

contato: Contato

estaCarregando: boolean;
notFound: boolean;

  constructor(
    private route: ActivatedRoute,
    private contatoService: ContatoService,
    private router : Router,
  ) { }

  ngOnInit(){
    
    this.getContato()
  }

getContato(){
  this.estaCarregando = true
  this.notFound = false;

  const idContato : any = this.route.snapshot.paramMap.get('id');

  this.contatoService.getContatoById(idContato)
  .pipe(
    take(1),
    finalize(() => this.estaCarregando = false)
  ).subscribe(response =>
    this.onSuccess(response),
    error => this.onError(error))
}


onSuccess(response : Contato){
  this.contato = response
  console.log(this.contato)
}
onError(error: any) {
  this.notFound = true;
  console.error(error)
}

voltar(){
  this.router.navigate([`contatos`])
  }
}
