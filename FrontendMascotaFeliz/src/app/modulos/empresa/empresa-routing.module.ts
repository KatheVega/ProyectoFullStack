import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { VerPlanesComponent } from './planes/ver-planes/ver-planes.component';
import { BuscarProspectoComponent } from './prospectos/buscar-prospecto/buscar-prospecto.component';
import { ContactanosComponent } from './prospectos/contactanos/contactanos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { SucursalesComponent } from './sucursales/sucursales.component';

const routes: Routes = [
  {
    path:"planes/ver-planes",
    component:VerPlanesComponent
  },
  {
    path:"prospectos/contactanos",
    component:ContactanosComponent
  },
  {
    path:"prospectos/listar-prospectos",
    component:BuscarProspectoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:"sucursales",
    component:SucursalesComponent
  },
  {
    path:"quienes-somos",
    component:QuienesSomosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
