import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  usuario : any

  constructor(
    private authService : AuthService

  ) { }

  ngOnInit(): void {
   this.usuario = this.authService.getUsuario();
  }

}
