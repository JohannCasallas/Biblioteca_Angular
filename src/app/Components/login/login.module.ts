import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    LoginComponent,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
