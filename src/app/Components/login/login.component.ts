import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILoginAutentication } from 'src/app/interfaces/ilogin-autentication'
import { LoginService } from '../../Services/login.service';
import { UtilidadService } from 'src/app/reusable/utilidad.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  FormularioLogin: FormGroup;
  ocultarPasaword: boolean = true;
  mostrarLoading: boolean = false;


  constructor(
    private fb: FormBuilder,
    private _loginService: LoginService,
    private _utilidadServicio: UtilidadService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.FormularioLogin = this.fb.group({
      correo: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }

  iniciarSesion(){
    this.mostrarLoading = true;

    const request: ILoginAutentication = {
      correo: this.FormularioLogin.value.correo,
      clave: this.FormularioLogin.value.clave
    }

    this._loginService.loginAutenticacion(request).subscribe({
      next: (data) => {
        if (data.status){
          this._utilidadServicio.guardarSesionUsuario(data.value);
          this.router.navigate(["pages"])
        }else
        this._utilidadServicio.mostrarAlerta("No se encontraron Coincidencias", "Opps!")
      },
      complete: () => {
        this.mostrarLoading = false
      },
      error: () => {
        this._utilidadServicio.mostrarAlerta("Error!!", "Opps!")
      }
    })
  }
  

  ocultarPassaword() {
    this.ocultarPasaword = !this.ocultarPasaword;
}

  // loginAutenticacion(correo: string, clave: string) {
  //   if (!this.validarCampos(correo, clave)) {
  //     this.openSnackBar('Campos incompletos', 'Cerrar');
  //     return;
  //   }

  //   const usuario = { correo: correo, clave: clave };
  //   this._loginService.loginAutenticacion(usuario).subscribe(
  //     response => {
  //       if (response.exito) {
  //         this.openSnackBar(response.mensaje, 'Aceptar');
  //         this.router.navigate(['/pages'])
  //       } else {
  //         this.openSnackBar(response.mensaje, 'Cerrar');
  //       }
  //     }
  //   );
  // }
  
  // validarCampos(email: string, password: string): boolean {
  //   return email.trim() !== '' && password.trim() !== '';
  // }
  
  // openSnackBar(message: string, action: string) {
  //   this.snackBar.open(message, action, {
  //     duration: 3000, 
  //     verticalPosition: 'top', 
  //     horizontalPosition: 'right', 
  //   });
  // }
  
  
}
