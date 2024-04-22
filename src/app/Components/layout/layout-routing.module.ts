import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PrestamoComponent } from './Pages/prestamo/prestamo.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { UsuariosComponent } from './Pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
      children: [
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'prestamo',
          component: PrestamoComponent
        },
        {
          path: 'registro',
          component: RegistroComponent
        },
        {
          path: 'Usuarios',
          component: UsuariosComponent
        },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
