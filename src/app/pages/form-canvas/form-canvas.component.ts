import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips'; 
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CanvasModelServiceService } from 'src/app/services/canvas-model-service.service';
import Swal from 'sweetalert2';

export interface Texto {
  name: string;
}

@Component({
  selector: 'app-form-canvas',
  standalone: true,
  imports: [CommonModule,MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatChipsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-canvas.component.html',
  styleUrls: ['./form-canvas.component.scss']
})
export class FormCanvasComponent {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  actividades: Texto[] = [];
  asociaciones: Texto[] = [];
  canales: Texto[] = [];
  estructura_costos: Texto[] = [];
  fuente_ingresos: Texto[] = [];
  Recursos_clave: Texto[] = [];
  relaciones_cliente: Texto[] = [];

  form_canvas: FormGroup;

  iteraciones: any[]=[
  'Actividades clave',
  'Asociaciones clave',
  'Canales',
  'Estructura costos',
  'Fuente ingresos',
  'Recursos clave',
  'Relaciones cliente'
]

  constructor(private dialog:MatDialog, private form:FormBuilder, private model_canvas_service:CanvasModelServiceService){
    this.form_canvas = this.form.group({
      segmento_mercado:['',Validators.required],
      propuesta_valor:['',Validators.required],
      canales:['',Validators.required],
      relaciones_clientes:['',Validators.required],
      fuente_ingresos:['',Validators.required],
      actividades_clave:['',Validators.required],
      recursos_clave:['',Validators.required],
      asociaciones_clave:['',Validators.required],
      estructura_costos:['',Validators.required]
    });
  }

  add(event: MatChipInputEvent,texto:string): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      //this.actividades.push({name: value});
      if(texto==='Actividades clave'){ this.actividades.push({name: value}); console.log(this.actividades)}
      if(texto==='Asociaciones clave'){ this.asociaciones.push({name: value}); console.log(this.asociaciones)}
      if(texto==='Canales'){ this.canales.push({name: value}); console.log(this.canales)}
      if(texto==='Estructura costos'){ this.estructura_costos.push({name: value}); console.log(this.estructura_costos)}
      if(texto==='Fuente ingresos'){ this.fuente_ingresos.push({name: value}); console.log(this.fuente_ingresos)}
      if(texto==='Recursos clave'){ this.Recursos_clave.push({name: value}); console.log(this.Recursos_clave)}
      if(texto==='Relaciones cliente'){ this.relaciones_cliente.push({name: value}); console.log(this.relaciones_cliente)}
    }
    // Clear the input value
    event.chipInput!.clear();
    console.log(texto);
  }

  remove(fruit: Texto,texto:string): void {

    if(texto==='Actividades clave'){
      const index = this.actividades.indexOf(fruit);
      if (index >= 0) {
        this.actividades.splice(index, 1);
      }
    }

    if(texto==='Asociaciones clave'){
      const index = this.asociaciones.indexOf(fruit);
      if (index >= 0) {
        this.asociaciones.splice(index, 1);
      }
    }

    if(texto==='Canales'){
      const index = this.canales.indexOf(fruit);
      if (index >= 0) {
        this.canales.splice(index, 1);
      }
    }

    if(texto==='Estructura costos'){
      const index = this.estructura_costos.indexOf(fruit);
      if (index >= 0) {
        this.estructura_costos.splice(index, 1);
      }
    }

    if(texto==='Fuente ingresos'){
      const index = this.fuente_ingresos.indexOf(fruit);
      if (index >= 0) {
        this.fuente_ingresos.splice(index, 1);
      }
    }

    if(texto==='Recursos clave'){
      const index = this.Recursos_clave.indexOf(fruit);
      if (index >= 0) {
        this.Recursos_clave.splice(index, 1);
      }
    }

    if(texto==='Relaciones cliente'){
      const index = this.relaciones_cliente.indexOf(fruit);
      if (index >= 0) {
        this.relaciones_cliente.splice(index, 1);
      }
    }
    
  }

  edit(fruit: Texto, event: MatChipEditedEvent,texto:string) {
    const value = event.value.trim();
    if (!value) {
      this.remove(fruit,texto);
      return;
    }
    // Edit existing fruit
    if(texto==='Actividades clave'){
      const index = this.actividades.indexOf(fruit);
      if (index >= 0) {
        this.actividades[index].name = value;
      }
    }

    if(texto==='Asociaciones clave'){
      const index = this.asociaciones.indexOf(fruit);
      if (index >= 0) {
        this.asociaciones[index].name = value;
      }
    }

    if(texto==='Canales'){
      const index = this.canales.indexOf(fruit);
      if (index >= 0) {
        this.canales[index].name = value;
      }
    }

    if(texto==='Estructura costos'){
      const index = this.estructura_costos.indexOf(fruit);
      if (index >= 0) {
        this.estructura_costos[index].name = value;
      }
    }

    if(texto==='Fuente ingresos'){
      const index = this.fuente_ingresos.indexOf(fruit);
      if (index >= 0) {
        this.fuente_ingresos[index].name = value;
      }
    }

    if(texto==='Recursos clave'){
      const index = this.Recursos_clave.indexOf(fruit);
      if (index >= 0) {
        this.Recursos_clave[index].name = value;
      }
    }
   
  }

  save_canvas_model(){
    if(this.form_canvas.valid){
      this.form_canvas.value['canales'] = JSON.stringify(this.canales);
      this.form_canvas.value['relaciones_clientes'] = JSON.stringify(this.relaciones_cliente);
      this.form_canvas.value['fuente_ingresos'] = JSON.stringify(this.fuente_ingresos);
      this.form_canvas.value['actividades_clave'] = JSON.stringify(this.actividades);
      this.form_canvas.value['recursos_clave'] = JSON.stringify(this.Recursos_clave);
      this.form_canvas.value['asociaciones_clave'] = JSON.stringify(this.asociaciones);
      this.form_canvas.value['estructura_costos'] = JSON.stringify(this.estructura_costos);

      console.log(this.form_canvas.value);

      this.model_canvas_service.save_canvas_model(this.form_canvas.value).subscribe(res=>{
        console.log(res);
        this.form_canvas.reset();
        this.mensaje_success('Modelo canvas registrado con exito !!');
        this.dialog.closeAll();
      });
    }
   //console.log(this.form_canvas.value); 
  }

  public closeForm(){
    this.dialog.closeAll();
  }

  public mensaje_success(mensaje:string){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 2000
    })
  }

}
