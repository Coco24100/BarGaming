import { Component, OnInit } from '@angular/core';
import { Client } from '../model';
import { ClientService } from './client.service';
import { CompteService } from '../compte/compte.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientForm?: Client = undefined;
  private compteAddedSubscription: Subscription | undefined;
  private clientsUpdatedSubscription: Subscription | undefined;
  
  constructor(private clientService: ClientService, private compteService: CompteService) {
  }
  
  ngOnInit() {
    this.compteAddedSubscription = this.compteService.onCompteAdded().subscribe(compte => {
      if (compte && compte.type === 'client') {
        this.clientService.load();
      }
    });
    this.clientsUpdatedSubscription = this.clientService.onClientsUpdated().subscribe(() => {
      this.clientForm = undefined;
    });
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
    if (this.clientForm) {
      if (this.clientForm.id) {
        this.clientService.update(this.clientForm);
      } else {
        this.clientService.create(this.clientForm);
      }
    }

    this.clientService.load(); // Mettez à jour la liste après l'opération CRUD
    this.cancel();
  }

  remove(id?: number) {
   this.clientService.delete(id);
  }

  cancel() {
    this.clientForm = undefined;
  }

}
