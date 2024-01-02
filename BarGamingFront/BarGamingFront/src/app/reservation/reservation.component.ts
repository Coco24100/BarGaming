import { Component } from '@angular/core';
import { ReservationService } from './reservation.service';
import { Client, Evenement, Reservation } from '../model';
import { ClientService } from '../client/client.service';
import { EvenementService } from '../evenement/evenement.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  
  reservationForm?: Reservation = undefined;
  clients: Array<Client> = new Array<Client>(); // liste de clients pour menu deroulant
  events: Array<Evenement> = new Array<Evenement>(); // liste de events pour menu deroulant

  constructor(private reservationService: ReservationService, private clientService: ClientService, private evenementService: EvenementService) {
  }

  list(): Reservation[] {
    return this.reservationService.findAll();
  }

    //Charge la liste de clients au moment de l'initialisation du composant
    listeclients(): Client[] {
      return this.clientService.findAll();
     }

      //Charge la liste d'events au moment de l'initialisation du composant
    listeevents(): Evenement[] {
      return this.evenementService.findAll();
     }

  add() {
    this.reservationForm = new Reservation();
  }

  edit(id?: number) {
    this.reservationService.findById(id).subscribe(resp => {
      this.reservationForm = resp;
    });
  }

  save() {
    if(this.reservationForm) {
      if(this.reservationForm.id) {
        this.reservationService.update(this.reservationForm);
      } else {
        this.reservationService.create(this.reservationForm);
      }
    }

    this.cancel();
  }

  remove(id?: number) {
   this.reservationService.delete(id);
  }

  cancel() {
    this.reservationForm = undefined;
  }
}
