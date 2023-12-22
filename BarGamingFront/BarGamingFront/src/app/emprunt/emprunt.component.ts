import { Component} from '@angular/core';
import { Emprunt, Jeu } from '../model';
import { EmpruntService } from './emprunt.service';
import { JeuxService } from '../jeux/jeux.service';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent {

  empruntForm?: Emprunt = undefined;
  jeux: Array<Jeu> = new Array<Jeu>(); // liste de jeux pour menu deroulant
  
  constructor(private empruntService: EmpruntService, private jeuxService: JeuxService) {
  }

  //Charge la liste de jeux au moment de l'initialisation du composant
  listejeux(): Jeu[] {
   return this.jeuxService.findAll();
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

    this.cancel();
  }

  remove(id?: number) {
   this.empruntService.delete(id);
  }

  cancel() {
    this.empruntForm = undefined;
  }
}
