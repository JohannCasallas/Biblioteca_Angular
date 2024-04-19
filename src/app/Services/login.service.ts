import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginAutentication } from '../interfaces/ilogin-autentication';
import { IPersona } from '../interfaces/ipersona';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private endpoint: string = environment.endPoint;
  private apiUrl: string = this.endpoint + "Login";

  constructor(
    private http: HttpClient
  ) { }

  consultarUsuario(): Observable<IPersona[]> {
    return this.http.get<IPersona[]>(`${this.apiUrl}/ConsultarUsuarios`);
  }

  loginAutenticacion(usuario: ILoginAutentication): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/LoginAutenticacion`, usuario);
  }
}
