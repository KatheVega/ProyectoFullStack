import { Component, OnInit } from '@angular/core';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';

@Component({
  selector: 'app-buscar-prospecto',
  templateUrl: './buscar-prospecto.component.html',
  styleUrls: ['./buscar-prospecto.component.css']
})
export class BuscarProspectoComponent implements OnInit{

  listadoProspectos: ModeloProspecto[]=[];

  constructor(
    private prospectoServicio:ProspectoService
  ){

  }

  ngOnInit(): void {
    this.ObtenerListadoProspectos();
  }

  ObtenerListadoProspectos(){
    this.prospectoServicio.ObtenerRegistroProspecto().subscribe((datos:ModeloProspecto[])=>{
      this.listadoProspectos = datos;
    })
  }

}
