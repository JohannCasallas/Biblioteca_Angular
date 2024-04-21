import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home/dashboard-home.component';
import { PrestamoComponent } from './prestamo/prestamo/prestamo.component';
import { RegistrarPrestamoComponent } from './prestamo/registrar-prestamo/registrar-prestamo.component';
import { ConsultarPrestamoComponent } from './prestamo/consultar-prestamo/consultar-prestamo.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { LibrosComponent } from './registro/libros/libros.component';
import { AutoresComponent } from './registro/autores/autores.component';
import { EditorialComponent } from './registro/editorial/editorial.component';
import { CategoriaComponent } from './registro/categoria/categoria.component';
import { PersonaComponent } from './persona/persona/persona.component';
import { UsuarioComponent } from './persona/usuario/usuario.component';
import { LectoresComponent } from './persona/lectores/lectores.component';


const routes: Routes = [
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
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DashboardRoutingModule { }
