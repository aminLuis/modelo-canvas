import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'inicio', loadComponent: ()=> import('./pages/inicio/inicio.component')},
  {path: 'canvas', loadComponent: ()=> import('./pages/canvas/canvas.component')},
  {path: 'watch-canvas/:id', loadComponent: ()=> import('./pages/watch-model-canvas/watch-model-canvas.component')}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
