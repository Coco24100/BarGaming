import { Component } from '@angular/core';
import { EvenementService } from '../evenement/evenement.service';
import { ReservationService } from '../reservation/reservation.service';
import { Client, Evenement, Reservation } from '../model';

@Component({
  selector: 'app-inscription-event',
  templateUrl: './inscription-event.component.html',
  styleUrls: ['./inscription-event.component.css']
})
export class InscriptionEventComponent {

  constructor(private evenementService: EvenementService, private reservationService: ReservationService) { }
  
  client = new Client(2,"John","Doe")



  reservationForm: Reservation = new Reservation(undefined,this.client,undefined,undefined);

  

  listEvent() {
    return this.evenementService.findAll()
  }



  save() {

    
    this.reservationForm.dateReservation = new Date();
    
    
    this.reservationService.create(this.reservationForm)

    
  }

  cancel() { }



}