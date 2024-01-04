import { Component} from '@angular/core';
import { Emprunt, Jeu, Client } from '../model';
import { EmpruntService } from './emprunt.service';
import { JeuxService } from '../jeux/jeux.service';
import { ClientService } from '../client/client.service';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent {

  empruntForm?: Emprunt = undefined;
  jeux: Array<Jeu> = new Array<Jeu>(); // liste de jeux pour menu deroulant
  clients: Array<Client> = new Array<Client>(); // liste de clients pour menu deroulant

  constructor(private empruntService: EmpruntService, private jeuxService: JeuxService, private clientService: ClientService) {
  }

  //Charge la liste de jeux au moment de l'initialisation du composant
  listejeux(): Jeu[] {
   return this.jeuxService.findAll();
  }

  //Charge la liste de clients au moment de l'initialisation du composant
  listeclients(): Client[] {
    return this.clientService.findAll();
   }

  list(): Emprunt[] {
    return this.empruntService.findAll();
  }

  add() {
    this.empruntForm = new Emprunt();
  }

  edit(id?: number) {
    this.empruntService.findById(id).subscribe(resp => {
      this.empruntForm = resp;
    });
  }

  save() {
    if(this.empruntForm) {
      if(this.empruntForm.id) {
        this.empruntService.update(this.empruntForm);
      } else {
        this.empruntService.create(this.empruntForm);
      }
    }
    this.listejeux();

    this.cancel();
  }

  remove(id?: number) {
   this.empruntService.delete(id);
  }

  cancel() {
    this.empruntForm = undefined;
  }
}
