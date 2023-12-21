import { Component } from '@angular/core';
import { EventService } from './event.service';
import { Event } from '../model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  eventForm?: Event = undefined;

  constructor(private eventService: EventService) {
  }

  list(): Event[] {
    return this.eventService.findAll();
  }

  add() {
    this.eventForm = new Event();
  }

  edit(id?: number) {
    this.eventService.findById(id).subscribe(resp => {
      this.eventForm = resp;
    });
  }

  save() {
    if(this.eventForm) {
      if(this.eventForm.id) {
        this.eventService.update(this.eventForm);
      } else {
        this.eventService.create(this.eventForm);
      }
    }

    this.cancel();
  }

  remove(id?: number) {
   this.eventService.delete(id);
  }

  cancel() {
    this.eventForm = undefined;
  }
}
