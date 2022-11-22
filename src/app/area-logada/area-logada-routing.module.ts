import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesContatoComponent } from '../contato/detalhes-contato/detalhes-contato.component';
import { ListarContatoComponent } from '../contato/listar-contatos/listar-contatos.component';
import { EstaLogadoGuard } from '../shared/guards/esta-logado/esta-logado.guard';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  ,
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'extrato',
    loadChildren: () => import('./extrato/extrato.module').then(m => m.ExtratoModule),
  },
  {
    path: 'contatos',
    loadChildren: () => import('../contato/contato.module').then(m => m.ContatoModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaLogadaRoutingModule { }
