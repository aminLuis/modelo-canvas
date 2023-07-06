import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CanvasModelServiceService } from 'src/app/services/canvas-model-service.service';
import { model_canvas } from 'src/app/interfaces/canvas-model.interface';
import { TableCanvasComponent } from "../table-canvas/table-canvas.component";
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { FormCanvasComponent } from '../form-canvas/form-canvas.component';

@Component({
    selector: 'app-canvas',
    standalone: true,
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.scss'],
    imports: [CommonModule, 
       MatButtonModule,
       MatIconModule, 
       TableCanvasComponent,
       MatDialogModule
      ]
})


export default class CanvasComponent implements OnInit {

  constructor(private model_canvas_service:CanvasModelServiceService, private dialog:MatDialog){

  }

  ngOnInit(): void {
    
  }

  public openForm() {
    this.dialog.open(FormCanvasComponent,{
      width:'50%',
      height: '100'
    });
  }

}
