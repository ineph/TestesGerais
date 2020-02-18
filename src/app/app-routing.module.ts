import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimplesComponent } from './simples/simples.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: SimplesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
