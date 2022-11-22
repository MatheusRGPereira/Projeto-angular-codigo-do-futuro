import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { DetalhesContatoComponent } from './contato/detalhes-contato/detalhes-contato.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './shared/components/nao-encontrado/nao-encontrado.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado.guard';

const routes: Routes = [{path: 'login', component: LoginComponent,},
{path: '', component: HomeComponent, canActivate: [EstaLogadoGuard]},
{path: 'extrato', component: ExtratoComponent , canActivate: [EstaLogadoGuard]},
{path: 'contatos', component: ContatoComponent, canActivate: [EstaLogadoGuard]},
{path: 'contatos/:id', component: DetalhesContatoComponent, canActivate: [EstaLogadoGuard]},
{path: '**', component:NaoEncontradoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
