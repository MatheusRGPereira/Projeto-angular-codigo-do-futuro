import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import {ListarContatoComponent } from './listar-contatos/listar-contatos.component';

const routes: Routes = [{
path: '',
component: ListarContatoComponent},
{
path: 'id',
component: DetalhesContatoComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
