import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-ngclass',
  templateUrl: './exercicio-ngclass.component.html',
  styleUrls: ['./exercicio-ngclass.component.css']
})
export class ExercicioNgclassComponent implements OnInit {

  deveSerVerde = false;

  tornarVerde(){
    this.deveSerVerde = !this.deveSerVerde
  }

  constructor() { }

  ngOnInit(): void {
  }

}
