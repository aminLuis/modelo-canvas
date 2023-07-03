import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [CommonModule, MatButtonModule,MatIconModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export default class CanvasComponent {

}
