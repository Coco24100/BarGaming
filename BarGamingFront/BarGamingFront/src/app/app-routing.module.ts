import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { ClientComponent } from './client/client.component';
import { EventComponent } from './event/event.component';
import { JeuxComponent } from './jeux/jeux.component';
import { JeuxVideoComponent } from './jeux-video/jeux-video.component';
import { JeuxSocieteComponent } from './jeux-societe/jeux-societe.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AccueilComponent } from './accueil/accueil.component'; 
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "emprunt", component: EmpruntComponent},
  {path: "client", component: ClientComponent},
  {path: "event", component: EventComponent},
  {path: "jeux", component: JeuxComponent},
  {path: "jeux-video", component: JeuxVideoComponent},
  {path: "jeux-societe", component: JeuxSocieteComponent},
  {path: "reservation", component: ReservationComponent},
  {path: "accueil", component: AccueilComponent},
  {path: "admin", component: AdminComponent},
  {path: "login", component: LoginComponent},
  {path: "", pathMatch: "full", redirectTo: "accueil"}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
