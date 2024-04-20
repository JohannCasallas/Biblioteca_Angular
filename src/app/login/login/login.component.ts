import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) {}

  toggleVisibility() {
    this.hide = !this.hide;
}

  loginAutenticacion(correo: string, clave: string) {
    if (!this.validarCampos(correo, clave)) {
      this.openSnackBar('Campos incompletos', 'Cerrar');
      return;
    }
    
    const usuario = { correo: correo, clave: clave };
    this.loginService.loginAutenticacion(usuario).subscribe(
      response => {
        if (response.exito) {
          this.openSnackBar(response.mensaje, 'Aceptar');
        } else {
          this.openSnackBar(response.mensaje, 'Cerrar');
        }
      }
    );
  }
  
  validarCampos(email: string, password: string): boolean {
    return email.trim() !== '' && password.trim() !== '';
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000, // Duración de la notificación en milisegundos
      verticalPosition: 'top', // Posición vertical de la notificación
      horizontalPosition: 'center', // Posición horizontal de la notificación
    });
  }
  
  
}
