import { Component, OnInit } from '@angular/core';
import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretiva.constants';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.css']
})
export class ExercicioDiretivasComponent implements OnInit {

  deveExibir = false;

 memes = MEMES_AGRUPADOS_POR_CATEGORIA;
 prefixoURL = 'https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images';

  listaCarros = [{
    placa: 'JND-7438',
    cor: 'branco',
  }, {
    placa: 'SXD-7128',
    cor: 'Azul',
  }, {
    placa: 'XYB-8728',
    cor: 'Preto',
  }, {
    placa: 'LKN-3492',
    cor: 'Verde',
  }, {
    placa: 'MCJ-2816',
    cor: 'branco',
  }, ]

  trocarValor(){
    this.deveExibir = !this.deveExibir;
  }

  soma(num1:number, num2: number){
    return num1 + num2;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
