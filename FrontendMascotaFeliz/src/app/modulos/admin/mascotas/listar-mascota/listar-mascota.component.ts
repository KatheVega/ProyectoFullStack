import { Component, OnInit } from '@angular/core';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';


@Component({
  selector: 'app-listar-mascota',
  templateUrl: './listar-mascota.component.html',
  styleUrls: ['./listar-mascota.component.css']
})
export class ListarMascotaComponent implements OnInit{

  listadoMascotas: ModeloMascota[] = [];

  constructor(
    private prospectoMascota: MascotaService
  ){}

  ngOnInit(): void {
    this.ObtenerListadoMascota();
  }

  ObtenerListadoMascota(){
    this.prospectoMascota.ObtenerRegistroMascota().subscribe((datos:ModeloMascota[])=>{
      this.listadoMascotas = datos;
    })
  }

}
