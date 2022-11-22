import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('emailInput') emailInput: ElementRef
  @ViewChild('passwordInput') passwordInput: ElementRef

  email: string
  password: string

  constructor(
    private loginService: LoginService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {

      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if (form.controls.email.invalid){
        this.emailInput.nativeElement.focus();
        return;
      }

      if (form.controls.password.invalid){
        this.passwordInput.nativeElement.focus();
        return;
      }

      return;
    }
    this.login()
  }

  login(){
    this.loginService.logar(this.email, this.password)
    .subscribe(
      _response => this.onLoginSuccess(),
      _error => {
        console.log("Dados incorretos");
      }
    );

  }

  onLoginSuccess(){
    this.router.navigate([''])
  }

  exibeErro(nomeControle: string, form:  NgForm) {
    if (!form.controls[nomeControle])
      return false

    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched
  }

}
