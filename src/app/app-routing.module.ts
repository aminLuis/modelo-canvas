import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CanvasComponent } from './pages/canvas/canvas.component';

const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'canvas', component:CanvasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
