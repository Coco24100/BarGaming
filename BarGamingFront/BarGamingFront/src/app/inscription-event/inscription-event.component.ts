import { Component } from '@angular/core';
import { EventService } from '../event/event.service';
import { ReservationService } from '../reservation/reservation.service';
import { Client, Event, Reservation } from '../model';

@Component({
  selector: 'app-inscription-event',
  templateUrl: './inscription-event.component.html',
  styleUrls: ['./inscription-event.component.css']
})
export class InscriptionEventComponent {

  constructor(private eventService: EventService, private reservationService: ReservationService) { }
  
  client = new Client(2,"John","Doe")



  reservationForm: Reservation = new Reservation(undefined,this.client,undefined,undefined);

  

  listEvent() {
    return this.eventService.findAll()
  }



  save() {

    
    this.reservationForm.dateReservation = new Date();
    
    
    this.reservationService.create(this.reservationForm)

    
  }

  cancel() { }



}
