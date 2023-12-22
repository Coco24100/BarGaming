import { Component } from '@angular/core';
import { JeuSociete } from '../model';
import { JeuxSocieteService } from './jeux-societe.service';


@Component({
  selector: 'app-jeux-societe',
  templateUrl: './jeux-societe.component.html',
  styleUrls: ['./jeux-societe.component.css']
})
export class JeuxSocieteComponent {

  jeuxSocieteForm?: JeuSociete = undefined;

  constructor(private jeuxSocieteService: JeuxSocieteService) {
  }

  list(): JeuSociete[] {
    return this.jeuxSocieteService.findAll();
  }

  add() {
    this.jeuxSocieteForm = new JeuSociete();
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
