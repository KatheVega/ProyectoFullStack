import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { DashboardAsesorComponent } from './dashboard/dashboard-asesor/dashboard-asesor.component';
import { DashboardClienteComponent } from './dashboard/dashboard-cliente/dashboard-cliente.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path:"registro",
    component:RegistroComponent
  },
  {
    path:"dashboard-asesor",
    component:DashboardAsesorComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"dashboard-cliente",
    component:DashboardClienteComponent,
    canActivate:[ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
