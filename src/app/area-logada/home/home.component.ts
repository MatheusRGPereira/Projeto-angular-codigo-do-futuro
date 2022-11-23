import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  usuario : any

  constructor(
    private authService : AuthService,
    private modalService : NgbModal

  ) { }

  closeResult = '';

  ngOnInit(): void {
   this.usuario = this.authService.getUsuario();
  }

  openModal(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				console.log("Modal Closed")
			},
			(reason) => {
				console.log("Modal Dimissed")
			},
		);
	}
}
