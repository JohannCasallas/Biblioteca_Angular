import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { LibrosComponent } from './libros/libros.component';
import { AutoresComponent } from './autores/autores.component';
import { EditorialComponent } from './editorial/editorial.component';
import { CategoriaComponent } from './categoria/categoria.component';



@NgModule({
  declarations: [
    RegistroComponent,
    LibrosComponent,
    AutoresComponent,
    EditorialComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegistroModule { }
