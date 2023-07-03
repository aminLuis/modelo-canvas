import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CanvasModelServiceService } from 'src/app/services/canvas-model-service.service';
import { model_canvas } from 'src/app/interfaces/canvas-model.interface';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule, MatButtonModule,MatIconModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})


export default class CanvasComponent implements OnInit {

  public model_canvas:model_canvas[]=[];

  constructor(private model_canvas_service:CanvasModelServiceService){

  }

  ngOnInit(): void {
      this.get_canvas_models();
  }

  public get_canvas_models(){
    this.model_canvas_service.get_canvas_models().subscribe(res=>{
      console.log(res);
    });
  }

}
