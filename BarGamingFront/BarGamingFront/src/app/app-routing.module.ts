import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {path: "emprunt", component: EmpruntComponent},
  {path: "client", component: ClientComponent},
  {path: "event", component: ClientComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
