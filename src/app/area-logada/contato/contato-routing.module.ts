import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { ListarContatoComponent } from './listar-contatos/listar-contatos.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';

const routes: Routes = [{
  path: '',
  component: ListarContatoComponent
},
{
  path: 'novo',
  component: ContatoFormComponent,
},
{
  path: ':id',
  component: DetalhesContatoComponent
},
{
  path: ':id/editar',
  component: ContatoFormComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
