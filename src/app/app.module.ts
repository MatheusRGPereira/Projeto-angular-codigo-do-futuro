import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import localept from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { HomeComponent } from './area-logada/home/home.component';
import { LoginComponent } from './login/login.component';
import { ExtratoComponent } from './area-logada/extrato/extrato.component';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { DetalhesContatoComponent } from './contato/detalhes-contato/detalhes-contato.component'
import { FormsModule } from '@angular/forms';


registerLocaleData(localept, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{

    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
