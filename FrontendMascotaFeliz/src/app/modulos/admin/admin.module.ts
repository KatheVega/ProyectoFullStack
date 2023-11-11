import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './usuarios/listar-usuario/listar-usuario.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { ListarMascotaComponent } from './mascotas/listar-mascota/listar-mascota.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { ListarSucursalComponent } from './sucursales/listar-sucursal/listar-sucursal.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { ListarPlanComponent } from './planes/listar-plan/listar-plan.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    BuscarUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    ListarUsuarioComponent,
    CrearMascotaComponent,
    BuscarMascotaComponent,
    EditarMascotaComponent,
    EliminarMascotaComponent,
    ListarMascotaComponent,
    CrearSucursalComponent,
    EliminarSucursalComponent,
    EditarSucursalComponent,
    ListarSucursalComponent,
    CrearPlanComponent,
    EliminarPlanComponent,
    EditarPlanComponent,
    ListarPlanComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
