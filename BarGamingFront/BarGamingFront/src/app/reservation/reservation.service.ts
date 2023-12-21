import { Injectable } from '@angular/core';
import { Reservation } from '../model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  reservations: Array<Reservation> = new Array<Reservation>();

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    let obs: Observable<Reservation[]> = this.http.get<Reservation[]>(environment.apiUrl + "/reservation");

    obs.subscribe(retour => {
      this.reservations = retour;
    });
  }

  findAll(): Reservation[] {
    return this.reservations;
  }

  findById(id?: number): Observable<Reservation> {
    return this.http.get<Reservation>(environment.apiUrl + "/reservation/"+id);
  }

  create(reservation: Reservation): void {
    this.http.post<Reservation>(environment.apiUrl + "/reservation", reservation).subscribe(resp => {
      this.load();
    });
  }

  update(reservation: Reservation): void {
    this.http.put<Reservation>(environment.apiUrl + "/reservation/"+reservation.id, reservation).subscribe(resp => {
      this.load();
    });
  }

  delete(id?: number) {
    this.http.delete<void>(environment.apiUrl + "/reservation/"+id).subscribe(resp => {
      this.load();
    });
  }
}

