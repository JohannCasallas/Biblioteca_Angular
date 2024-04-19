import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) {}

  loginAutenticacion(email: string, password: string) {
    const usuario = { correo: email, clave: password };
    this.loginService.loginAutenticacion(usuario).subscribe(
    );
  }
}

