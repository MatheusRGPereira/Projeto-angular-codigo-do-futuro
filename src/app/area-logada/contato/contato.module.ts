import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoRoutingModule } from './contato-routing.module';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { ListarContatoComponent } from './listar-contatos/listar-contatos.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ListarContatoComponent,
    DetalhesContatoComponent,
    ContatoFormComponent,
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ContatoModule { }
