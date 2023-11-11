import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { DashboardClienteComponent } from './dashboard/dashboard-cliente/dashboard-cliente.component';
import { DashboardAsesorComponent } from './dashboard/dashboard-asesor/dashboard-asesor.component';


@NgModule({
  declarations: [
    RegistroComponent,
    DashboardClienteComponent,
    DashboardAsesorComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
