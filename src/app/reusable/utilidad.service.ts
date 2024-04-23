import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILoginAutentication } from '../interfaces/ilogin-autentication';



@Injectable({
  providedIn: 'root'
})
export class UtilidadService {

  constructor(private _sanackBar: MatSnackBar) { }

  /**
   * Muestra una alerta utilizando el servicio MatSnackBar de Angular Material.
   * @param mensaje El mensaje que se mostrará en la alerta.
   * @param tipo El tipo de alerta, como "error", "success", "warning", etc.
   */
  mostrarAlerta(mensaje: string, tipo: string) {
    this._sanackBar.open(mensaje, tipo, {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 3000
    });
  }

  /**
   * Guarda la sesión del usuario en el almacenamiento local del navegador.
   * @param usuarioSesion La sesión del usuario que se va a guardar.
   */
  guardarSesionUsuario(usuarioSesion: ILoginAutentication) {
    localStorage.setItem("usuario", JSON.stringify(usuarioSesion));
  }

  /**
   * Obtiene la sesión del usuario almacenada en el almacenamiento local del navegador.
   * @returns La sesión del usuario recuperada del almacenamiento local.
   */
  obtenerSesionUsuario(): ILoginAutentication| null {
    const dataCadena = localStorage.getItem("usuario");
    if (dataCadena) {
      return JSON.parse(dataCadena);
    } else {
      return null;
    }
  }

  /**
   * Elimina la sesión del usuario del almacenamiento local del navegador.
   */
  eliminarSesionUsuario() {
    localStorage.removeItem("usuario");
  }
}
