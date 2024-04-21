import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;

  constructor(
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router
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
          this.router.navigate(['/dashboard'])
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
      duration: 3000, 
      verticalPosition: 'top', 
      horizontalPosition: 'right', 
    });
  }
  
  
}
