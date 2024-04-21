import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeModule } from './dashboard-home/dashboard-home.module';
import { PrestamoModule } from './prestamo/prestamo.module';
import { RegistroModule } from './registro/registro.module';
import { PersonaModule } from './persona/persona.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../reusable/shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardHomeModule,
    PrestamoModule,
    RegistroModule,
    PersonaModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
