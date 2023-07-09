import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CanvasModelServiceService } from 'src/app/services/canvas-model-service.service';
import { model_canvas } from 'src/app/interfaces/canvas-model.interface';

export interface Texto {
  name: string;
}

@Component({
  selector: 'app-watch-model-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './watch-model-canvas.component.html',
  styleUrls: ['./watch-model-canvas.component.scss']
})
export default class WatchModelCanvasComponent implements OnInit{

  public canvas_model!:model_canvas;
  public id!:string;

  actividades: Texto[] = [];
  asociaciones: Texto[] = [];
  canales: Texto[] = [];
  estructura_costos: Texto[] = [];
  fuente_ingresos: Texto[] = [];
  Recursos_clave: Texto[] = [];
  relaciones_cliente: Texto[] = [];

  constructor(private route:ActivatedRoute,
    private canvas_model_service:CanvasModelServiceService
    ){}

  ngOnInit(): void {
      this.get_id();
      this.get_canvas_model();
  }

  get_id(){
    this.id = this.route.snapshot.paramMap.get('id')+'';
  }

  get_canvas_model(){
    this.canvas_model_service.get_canvas_model(this.id).subscribe(res=>{
      this.canvas_model = res;
      this.asociaciones = JSON.parse(this.canvas_model.asociaciones_clave+'');
      this.actividades = JSON.parse(this.canvas_model.actividades_clave+'');
      this.Recursos_clave = JSON.parse(this.canvas_model.recursos_clave+'');
      this.relaciones_cliente = JSON.parse(this.canvas_model.relaciones_clientes+'');
      this.estructura_costos = JSON.parse(this.canvas_model.estructura_costos+'');
      this.fuente_ingresos = JSON.parse(this.canvas_model.fuente_ingresos+'');
      this.canales = JSON.parse(this.canvas_model.canales+'');
    });
  }

}
