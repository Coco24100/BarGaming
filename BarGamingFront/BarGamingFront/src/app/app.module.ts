import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { ClientComponent } from './client/client.component';
import { EventComponent } from './event/event.component';
import { JeuxComponent } from './jeux/jeux.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JeuxVideoComponent } from './jeux-video/jeux-video.component';
import { JeuxSocieteComponent } from './jeux-societe/jeux-societe.component';
import { AdminComponent } from './admin/admin.component';
import { InscriptionEventComponent } from './inscription-event/inscription-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpruntComponent,
    ClientComponent,
    EventComponent,
    JeuxComponent,
    ReservationComponent,
    AccueilComponent,
    LoginComponent,
    AdminComponent,
    AccueilComponent,
    NavbarComponent,
    JeuxVideoComponent,
    JeuxSocieteComponent,
    InscriptionEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
