import { Component } from '@angular/core';
import { Client } from '../model';
import { ClientService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  clientForm?: Client = undefined;

  constructor(private clientService: ClientService) {
  }

  list(): Client[] {
    return this.clientService.findAll();
  }

  add() {
    this.clientForm = new Client();
  }

  edit(id?: number) {
    this.clientService.findById(id).subscribe(resp => {
      this.clientForm = resp;
    });
  }

  save() {
    if(this.clientForm) {
      if(this.clientForm.id) {
        this.clientService.update(this.clientForm);
      } else {
        this.clientService.create(this.clientForm);
      }
    }

    this.cancel();
  }

  remove(id?: number) {
   this.clientService.delete(id);
  }

  cancel() {
    this.clientForm = undefined;
  }
}

