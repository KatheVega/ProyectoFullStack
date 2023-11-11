import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit{
  fgValidador:FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'apellido':['',[Validators.required]],
    'correo':['',[Validators.required]],
    'celular':['',[Validators.required]],
    'comentario':['',[Validators.required]],

  });

  constructor(
    private fb: FormBuilder,
    private servicioProspecto : ProspectoService,
    private router: Router
  ){}

  ngOnInit(): void {
    
  }

  GuardarProspecto(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let celular = this.fgValidador.controls["celular"].value;
    let comentario = this.fgValidador.controls["comentario"].value;
    let p = new ModeloProspecto();
    p.nombre = nombre;
    p.apellido = apellido;
    p.correo = correo;
    p.celular = celular;
    p.comentario = comentario;
    // agregar si esta con sesion abierta redireccionar /empresa/prospectos/listar-prospectos sino al /home

    

    this.servicioProspecto.CrearProspecto(p).subscribe((datos: ModeloProspecto)=>{
      alert("PQR enviado satisfactoriamente, espere la respuesta de uno de nuestros asesores.....")
      this.router.navigate(["/home"]);
    },(error:any)=>{
      alert("Error, Lo sentimos no se envio su PQR intenta nuevamente");
    })
  }
}
