import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from '../model';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: Array<Event> = new Array<Event>();

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    let obs: Observable<Event[]> = this.http.get<Event[]>(environment.apiUrl + "/event");

    obs.subscribe(retour => {
      this.events = retour;
    });
  }

  findAll(): Event[] {
    return this.events;
  }

  findById(id?: number): Observable<Event> {
    return this.http.get<Event>(environment.apiUrl + "/event/"+id);
  }

  create(event: Event): void {
    this.http.post<Event>(environment.apiUrl + "/event", event).subscribe(resp => {
      this.load();
    });
  }

  update(event: Event): void {
    this.http.put<Event>(environment.apiUrl + "/event/"+event.id, event).subscribe(resp => {
      this.load();
    });
  }

  delete(id?: number) {
    this.http.delete<void>(environment.apiUrl + "/event/"+id).subscribe(resp => {
      this.load();
    });
  }
}
