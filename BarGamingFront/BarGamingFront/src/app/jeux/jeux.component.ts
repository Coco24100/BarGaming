import { Component } from '@angular/core';
import { Jeu } from '../model';
import { JeuxService } from './jeux.service';
import { JeuxSocieteService } from '../jeux-societe/jeux-societe.service';
import { JeuxVideoService } from '../jeux-video/jeux-video.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent {

  jeuxForm?: Jeu = undefined;

  constructor(private jeuxService : JeuxService ,private jeuxSocieteService: JeuxSocieteService , private jeuxVideoService : JeuxVideoService,private router: Router) {
  }

  list(): Jeu[] {
    return this.jeuxService.findAll();
  }

  add() {
    this.jeuxForm = new Jeu();
  }

  edit(id?: number) {
    this.jeuxService.findById(id).subscribe(resp => {
      this.jeuxForm = resp;
    });
  }

  save() {
    if(this.jeuxForm) {
      if(this.jeuxForm.id) {
        this.jeuxService.update(this.jeuxForm);
      } else {
        if(this.jeuxForm.plateforme != undefined)
            {
              this.jeuxVideoService.create(this.jeuxForm);
            }
        else
            {
              this.jeuxSocieteService.create(this.jeuxForm)
            }
      }
    }  

    this.cancel();
    }

  remove(id?: number) {
   this.jeuxService.delete(id);
  }

  cancel() {
    this.jeuxForm = undefined;
  }



}
