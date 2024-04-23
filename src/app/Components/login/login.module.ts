import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/reusable/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class LoginModule { }
