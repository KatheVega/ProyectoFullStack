import { NgModule } from '@angular/core';
import { Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { ListarMascotaComponent } from './mascotas/listar-mascota/listar-mascota.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { ListarPlanComponent } from './planes/listar-plan/listar-plan.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { ListarSucursalComponent } from './sucursales/listar-sucursal/listar-sucursal.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './usuarios/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {
    path:"crear-usuario",
    component:CrearUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"buscar-usuario",
    component:BuscarUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"editar-usuario",
    component:EditarUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"eliminar-usuario",
    component:EliminarUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"listar-usuario",
    component:ListarUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"crear-mascota",
    component:CrearMascotaComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"buscar-mascota",
    component:BuscarMascotaComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"editar-mascota",
    component:EditarMascotaComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"eliminar-mascota",
    component:EliminarMascotaComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"listar-mascota",
    component:ListarMascotaComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"crear-sucursal",
    component:CrearSucursalComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"eliminar-sucursal",
    component:EliminarSucursalComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"editar-sucursal",
    component:EditarSucursalComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"listar-sucursal",
    component:ListarSucursalComponent
  },
  {
    path:"listar-sucursales",
    component:ListarSucursalComponent
  },
  {
    path:"crear-plan",
    component:CrearPlanComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"eliminar-plan",
    component:EliminarPlanComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"editar-plan",
    component:EditarPlanComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"listar-plan",
    component:ListarPlanComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate:[ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
