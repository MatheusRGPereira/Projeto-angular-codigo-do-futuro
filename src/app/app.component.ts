import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador';

  onVaalorAtualizadoNoContador(novoValor: number){
    console.log("onValorAtualizadoNoContador", novoValor)
  }
}
