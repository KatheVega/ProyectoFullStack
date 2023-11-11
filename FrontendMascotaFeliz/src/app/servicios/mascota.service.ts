import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { ModeloMascota } from '../modelos/mascota.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  url='http://localhost:3000';
  token: string='';

  constructor(
    private http: HttpClient,
    private seguridadservicio : SeguridadService
  ) { 
    this.token = this.seguridadservicio.ObtenerToken();
  }

  ObtenerRegistroMascota(): Observable<ModeloMascota[]>{
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas`);
  }

  CrearMascota(mascota: ModeloMascota):Observable<ModeloMascota>{
    return this.http.post(`${this.url}/mascotas`,mascota,{
      headers:new HttpHeaders({
        'Autorization':`Bearer ${this.token}`
      })
    })
  }

  ActualizarMascota(mascota: ModeloMascota):Observable<ModeloMascota>{
    return this.http.put(`${this.url}/mascotas`,mascota,{
      headers: new HttpHeaders({
        'Autorization':`Bearer ${this.token}`
      })
    });
  }

  BorrarMascota(id: string):Observable<any>{
    return this.http.delete(`${this.url}/mascotas/${id}`,{
      headers: new HttpHeaders ({
        'Autorization':`Bearer ${this.token}`
      })
    })
  }

  
}

