import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PrestamoComponent } from './Pages/prestamo/prestamo.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { UsuariosComponent } from './Pages/usuarios/usuarios.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PrestamoComponent,
    RegistroComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
