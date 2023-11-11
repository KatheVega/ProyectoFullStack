import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from '../user/registro/registro.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { LoginComponent } from './login/login.component';
import { OlvidarClaveComponent } from './olvidar-clave/olvidar-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"recuperar-clave",
    component:RecuperarClaveComponent
  },
  {
    path:"cerrar-sesion",
    component:CerrarSesionComponent
  },
  {
    path:"registrar",
    component:RegistrarComponent
  },
  {
    path:"olvidar-clave",
    component:OlvidarClaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
