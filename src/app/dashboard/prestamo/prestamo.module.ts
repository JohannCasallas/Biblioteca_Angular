import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamoComponent } from './prestamo/prestamo.component';
import { RegistrarPrestamoComponent } from './registrar-prestamo/registrar-prestamo.component';
import { ConsultarPrestamoComponent } from './consultar-prestamo/consultar-prestamo.component';



@NgModule({
  declarations: [
    PrestamoComponent,
    RegistrarPrestamoComponent,
    ConsultarPrestamoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrestamoModule { }
