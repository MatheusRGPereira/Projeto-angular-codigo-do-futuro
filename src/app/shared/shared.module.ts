import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioDiretivasComponent } from './components/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioNgclassComponent } from './components/exercicio-ngclass/exercicio-ngclass.component';
import { ExercicioPipesComponent } from './components/exercicio-pipes/exercicio-pipes.component';
import { ContadorComponent } from './components/contador/contador.component';
import { HeaderComponent } from './components/header/header.component';
import { NaoEncontradoComponent } from './components/nao-encontrado/nao-encontrado.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [  
    ExercicioDiretivasComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent,
    ContadorComponent,
    HeaderComponent,
    NaoEncontradoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    ExercicioDiretivasComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent,
    ContadorComponent,
    HeaderComponent,
    NaoEncontradoComponent,
  ]
})
export class SharedModule { }
