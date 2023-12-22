import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { ClientComponent } from './client/client.component';
import { EventComponent } from './event/event.component';
import { JeuxComponent } from './jeux/jeux.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  {path: "emprunt", component: EmpruntComponent},
  {path: "client", component: ClientComponent},
  {path: "event", component: EventComponent},
  {path: "jeux", component: JeuxComponent},
  {path: "reservation", component: ReservationComponent},
  {path: "accueil", component: AcceuilComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
