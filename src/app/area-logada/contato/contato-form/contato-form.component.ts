import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs';
import { Contato } from '../contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent implements OnInit {

  idContato: string;
  contatoForm: FormGroup;
  estaCarregando: boolean;
  notFound: boolean;

  constructor(
    private formsBuilder: FormBuilder,
    private contatoService: ContatoService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.inicializarFormulario();
    this.idContato = this.route.snapshot.paramMap.get('id');
    if (this.idContato) {
      this.getContato();
    }
  }

//Inicializar Formularios com os dados do contato para edição
  inicializarFormulario() {
    this.contatoForm = this.formsBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      cpf: ['', [Validators.maxLength(11), Validators.required]],
      dadosBancarios: this.formsBuilder.group({
        banco: ['', [Validators.required, Validators.minLength(3)]],
        ag: ['', [Validators.maxLength(8), Validators.required]],
        cc: ['', Validators.required],
      })
    })
  }
  getContato() {
    this.estaCarregando = true
    this.notFound = false;
    const idContato: any = this.route.snapshot.paramMap.get('id');
    this.contatoService.getContatoById(idContato)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      ).subscribe(response =>
        this.onSuccessCarregarContato(response),
        error => this.onErrorCarregarContato(error))
  }
  onSuccessCarregarContato(response: Contato) {
    console.log(response)
    this.contatoForm.patchValue(response)
  }
  onErrorCarregarContato(error: any) {
    this.notFound = true;
    console.error(error)
  }
//Fim do get Contato para edição


// Criando validações nos inputs
  exibeErro(nomeControle: string,) {
    if (!this.contatoForm.get(nomeControle))
      return false

    return this.contatoForm.get(nomeControle).invalid && this.contatoForm.get(nomeControle).touched
  }
  validateAllFormFields(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = this.contatoForm.get(field);
      if(control instanceof FormControl){
        control.markAsTouched();
      }else if (control instanceof FormGroup){
        this.validateAllFormFields(control);
      }
    });
  }
  onSubmit() {
    if (this.contatoForm.invalid) {
      this.validateAllFormFields(this.contatoForm);
      return;
    }
    if(this.idContato){
      this.salvarContato()
      return
    }
      this.CriarContato()
    
  }
// fim das validações no input


//Criar contato
  CriarContato() {
    this.contatoService.createContato(this.contatoForm.value)
      .subscribe(
        response => this.onSuccessCriarContato(),
        error => this.onErrorCriarContato(),
      )
  }
  onSuccessCriarContato() {
    this.toastr.success('Sucesso', 'Contato criado com sucesso')
    this.router.navigate(['contatos'])
  }
  onErrorCriarContato() {
    this.toastr.error("Erro", 'Erro ao criar novo contato')

  }
//Fim Criar contato


//Editar contato
salvarContato(){
  this.contatoService.updateContato(this.idContato ,this.contatoForm.value)
  .subscribe(
    response => this.onSuccessSalvarContato(),
    error => this.onErrorSalvarContato()
  );
}

onSuccessSalvarContato(){
this.toastr.success("Sucesso", "Contato Atualizado com sucesso.")
this.router.navigate(['contatos'])
}

onErrorSalvarContato(){
this.toastr.error("Erro", "Erro ao atualizar o contato")
}

}

