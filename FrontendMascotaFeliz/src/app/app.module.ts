import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PiePaginaComponent } from './plantillas/pie-pagina/pie-pagina.component';
import { ErrorComponent } from './plantillas/error/error.component';
import { Error500Component } from './plantillas/error500/error500.component';
import { Error404Component } from './plantillas/error404/error404.component';
import { HomeComponent } from './plantillas/home/home.component';
import { BarraNavegacionComponent } from './plantillas/barra-navegacion/barra-navegacion.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    ErrorComponent,
    Error500Component,
    Error404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
