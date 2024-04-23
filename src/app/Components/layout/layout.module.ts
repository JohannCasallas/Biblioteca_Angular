import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PrestamoComponent } from './Pages/prestamo/prestamo.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { UsuariosComponent } from './Pages/usuarios/usuarios.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/reusable/shared/shared.module';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    DashboardComponent,
    PrestamoComponent,
    RegistroComponent,
    UsuariosComponent,
    LayoutComponent,
  ],
  imports: [
    LayoutRoutingModule,
    SharedModule,
    RouterModule,
    CommonModule
  ]
})
export class LayoutModule { }
