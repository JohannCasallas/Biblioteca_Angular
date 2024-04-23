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

  iniciarSesion() {
    this.mostrarLoading = true;

    const request: ILoginAutentication = {
      correo: this.FormularioLogin.value.correo,
      clave: this.FormularioLogin.value.clave
    }

    this._loginService.loginAutenticacion(request).subscribe({
      next: (data) => {
        if (data.exito) {
          this._utilidadServicio.guardarSesionUsuario(data.value);
          this._utilidadServicio.mostrarAlerta(data.mensaje, "Exito")
          this.router.navigate(["pages"])
        } else
          this._utilidadServicio.mostrarAlerta(data.mensaje, "Opps!")
      },
      complete: () => {
        this.mostrarLoading = false
      },
    })
  }

  ocultarPassaword() {
    this.ocultarPasaword = !this.ocultarPasaword;
  }

}
