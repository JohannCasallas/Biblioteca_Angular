import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeModule } from './dashboard-home/dashboard-home.module';
import { PrestamoModule } from './prestamo/prestamo.module';
import { RegistroModule } from './registro/registro.module';
import { PersonaModule } from './persona/persona.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardHomeModule,
    PrestamoModule,
    RegistroModule,
    PersonaModule
  ]
})
export class DashboardModule { }
