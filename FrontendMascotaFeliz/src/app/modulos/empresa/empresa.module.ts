import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { VerPlanesComponent } from './planes/ver-planes/ver-planes.component';
import { ContactanosComponent } from './prospectos/contactanos/contactanos.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { BuscarProspectoComponent } from './prospectos/buscar-prospecto/buscar-prospecto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VerPlanesComponent,
    ContactanosComponent,
    SucursalesComponent,
    QuienesSomosComponent,
    BuscarProspectoComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpresaModule { }
