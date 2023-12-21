import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpruntComponent } from './emprunt/emprunt.component';

const routes: Routes = [
  {path: "emprunt", component: EmpruntComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
