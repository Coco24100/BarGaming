import { Component } from '@angular/core';
import { EventService } from '../event/event.service';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../model';

@Component({
  selector: 'app-inscription-event',
  templateUrl: './inscription-event.component.html',
  styleUrls: ['./inscription-event.component.css']
})
export class InscriptionEventComponent {

  constructor(private eventService: EventService, private reservationService: ReservationService) { }
  reservationForm: Reservation = new Reservation(undefined,undefined,undefined,undefined);


  listEvent() {
    return this.eventService.findAll()
  }

  

  save() {

    this.reservationForm.dateReservation = Date.now().toString();
    
    this.reservationService.create(this.reservationForm)

    
  }

  cancel() { }



}
