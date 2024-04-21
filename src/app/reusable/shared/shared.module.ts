import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Para formularios
import { HttpClientModule } from '@angular/common/http'; // Para realizar solicitudes HTTP
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Animaciones
import { MatButtonModule } from '@angular/material/button'; // Botones
import { MatIconModule } from '@angular/material/icon'; // Iconos
import { MatInputModule } from '@angular/material/input'; // Campos de entrada
import { MatFormFieldModule } from '@angular/material/form-field'; // Campos de formulario
import { MatSelectModule } from '@angular/material/select'; // Selección
import { MatCheckboxModule } from '@angular/material/checkbox'; // Casillas de verificación
import { MatRadioModule } from '@angular/material/radio'; // Botones de radio
import { MatDatepickerModule } from '@angular/material/datepicker'; // Selector de fecha
import { MatNativeDateModule } from '@angular/material/core'; // Para usar la fecha nativa
import { MatCardModule } from '@angular/material/card'; // Tarjetas
import { MatDialogModule } from '@angular/material/dialog'; // Diálogos modales
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Mensajes emergentes
import { MatTableModule } from '@angular/material/table'; // Tablas
import { MatPaginatorModule } from '@angular/material/paginator'; // Paginación de tablas
import { MatSortModule } from '@angular/material/sort'; // Ordenamiento de tablas
import { MatMenuModule } from '@angular/material/menu'; // Menús desplegables
import { MatToolbarModule } from '@angular/material/toolbar'; // Barra de herramientas
import { MatSidenavModule } from '@angular/material/sidenav'; // Panel lateral
import { MatListModule } from '@angular/material/list'; // Lista
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Indicador de carga
import { MatTooltipModule } from '@angular/material/tooltip'; // Información sobre herramientas

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDialogModule
  ]
})
export class SharedModule { }
