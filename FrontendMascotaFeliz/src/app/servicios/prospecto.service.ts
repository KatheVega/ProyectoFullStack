import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProspecto } from '../modelos/prospecto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProspectoService {

  url = 'http://localhost:3000';
  token:string = '';

  constructor(
    private http: HttpClient,
    private seguridadServicio :SeguridadService
  ) { 
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistroProspecto(): Observable<ModeloProspecto[]>{
    return this.http.get<ModeloProspecto[]>(`${this.url}/prospectos`);
  }

  CrearProspecto(prospecto: ModeloProspecto): Observable<ModeloProspecto>{
    return this.http.post(`${this.url}/prospectos`, prospecto,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
      })
    }

    //por si se implementa estado del prospecto y se pueda modificar ese atributo
    ActualizarProspecto(prospecto: ModeloProspecto): Observable<ModeloProspecto>{
      return this.http.put(`${this.url}/prospectos`, prospecto,{
        headers: new HttpHeaders({
          'Authorization':`Bearer ${this.token}`
        })
        })
      }

}
