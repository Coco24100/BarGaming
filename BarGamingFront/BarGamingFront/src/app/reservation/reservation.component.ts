import { Component } from '@angular/core';
import { ReservationService } from './reservation.service';
import { Reservation } from '../model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  
  reservationForm?: Reservation = undefined;

  constructor(private reservationService: ReservationService) {
  }

  list(): Reservation[] {
    return this.reservationService.findAll();
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
