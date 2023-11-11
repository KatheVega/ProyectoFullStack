import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantillas/error/error.component';
import { HomeComponent } from './plantillas/home/home.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/home"
  },
  {
    path:"seguridad",
    loadChildren: ()=> import("./modulos/seguridad/seguridad.module").then(x=> x.SeguridadModule)
  },
  {
    path:"admin",
    loadChildren:()=> import("./modulos/admin/admin.module").then(x=>x.AdminModule)
  },
  {
    path:"empresa",
    loadChildren:()=> import("./modulos/empresa/empresa.module").then(x=>x.EmpresaModule)
  },
  {
    path:"user",
    loadChildren:()=> import("./modulos/user/user.module").then(x=>x.UserModule)
  },
  {
    path:"**",
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
