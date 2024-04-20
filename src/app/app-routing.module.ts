import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home/dashboard-home.component';
import { PrestamoComponent } from './dashboard/prestamo/prestamo/prestamo.component';
import { RegistrarPrestamoComponent } from './dashboard/prestamo/registrar-prestamo/registrar-prestamo.component';
import { ConsultarPrestamoComponent } from './dashboard/prestamo/consultar-prestamo/consultar-prestamo.component';
import { RegistroComponent } from './dashboard/registro/registro/registro.component';
import { LibrosComponent } from './dashboard/registro/libros/libros.component';
import { AutoresComponent } from './dashboard/registro/autores/autores.component';
import { EditorialComponent } from './dashboard/registro/editorial/editorial.component';
import { CategoriaComponent } from './dashboard/registro/categoria/categoria.component';
import { PersonaComponent } from './dashboard/persona/persona/persona.component';
import { UsuarioComponent } from './dashboard/persona/usuario/usuario.component';
import { LectoresComponent } from './dashboard/persona/lectores/lectores.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      { path: '', component: DashboardHomeComponent },
      { 
        path: 'prestamo', 
        component: PrestamoComponent,
        children: [
          { path: 'registrar', component: RegistrarPrestamoComponent },
          { path: 'consultar', component: ConsultarPrestamoComponent }
        ]
      },
      { 
        path: 'registro', 
        component: RegistroComponent,
        children: [
          { path: 'libros', component: LibrosComponent },
          { path: 'autores', component: AutoresComponent },
          { path: 'editorial', component: EditorialComponent },
          { path: 'categoria', component: CategoriaComponent }
        ]
      },
      { 
        path: 'persona', 
        component: PersonaComponent,
        children: [
          { path: 'usuario', component: UsuarioComponent },
          { path: 'lectores', component: LectoresComponent }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
