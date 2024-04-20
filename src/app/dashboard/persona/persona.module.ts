import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona/persona.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LectoresComponent } from './lectores/lectores.component';



@NgModule({
  declarations: [
    PersonaComponent,
    UsuarioComponent,
    LectoresComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonaModule { }
