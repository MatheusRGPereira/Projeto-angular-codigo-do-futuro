import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.css']
})
export class ExercicioPipesComponent implements OnInit {

  filme = {
    titulo: "Harry Potter - A pedra filosofal",
    estrelas: 4.454552154,
    precoAluguel: 15.45,
    dataLancamento: new Date(2019, 5 , 30)
  };

  compras = [{
    produto: "Lampadas",
    valor: 299.99,
    quantiidade: 2 ,
    peso: 0 ,
    data: new Date(2022,1,1,15,20)
  },{
    produto: "Farinha",
    valor: 450.29,
    quantiidade: 2 ,
    peso: 29.333333 ,
    data: new Date(2022,1,1,19,30)
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
