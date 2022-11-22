import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarContatoComponent } from './contato/listar-contatos/listar-contatos.component';
import { DetalhesContatoComponent } from './contato/detalhes-contato/detalhes-contato.component';
import { ExtratoComponent } from './area-logada/extrato/extrato.component';
import { HomeComponent } from './area-logada/home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './shared/components/nao-encontrado/nao-encontrado.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado/nao-esta-logado.guard';

const routes: Routes = [
  {
    path:'area-logada',
   loadChildren: () => import('./area-logada/area-logada.module').then(m => m.AreaLogadaModule),
    canActivate: [EstaLogadoGuard]

  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NaoEstaLogadoGuard]
  },
  { path: '**', component: NaoEncontradoComponent },
  {
    path :'',
    redirectTo: 'area-logada',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
