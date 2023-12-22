import { Component } from '@angular/core';
import { Jeu } from '../model';
import { JeuxSocieteService } from './jeux-societe.service';


@Component({
  selector: 'app-jeux-societe',
  templateUrl: './jeux-societe.component.html',
  styleUrls: ['./jeux-societe.component.css']
})
export class JeuxSocieteComponent {

  jeuxSocieteForm?: Jeu = undefined;

  constructor(private jeuxSocieteService: JeuxSocieteService) {
  }

  list(): Jeu[] {
    return this.jeuxSocieteService.findAll();
  }

  add() {
    this.jeuxSocieteForm = new Jeu();
  }

  edit(id?: number) {
    this.jeuxSocieteService.findById(id).subscribe(resp => {
      this.jeuxSocieteForm = resp;
    });
  }

  save() {
    if(this.jeuxSocieteForm) {
      if(this.jeuxSocieteForm.id) {
        this.jeuxSocieteService.update(this.jeuxSocieteForm);
      } else {
        this.jeuxSocieteService.create(this.jeuxSocieteForm);
      }
    }

    this.cancel();
  }

  remove(id?: number) {
   this.jeuxSocieteService.delete(id);
  }

  cancel() {
    this.jeuxSocieteForm = undefined;
  }
}
