import { Component } from '@angular/core';
import { Emprunt, JeuVideo } from '../model';
import { JeuxVideoService } from './jeux-video.service';
import { AuthService } from '../auth.service';
import { JeuxService } from '../jeux/jeux.service';
import { EmpruntService } from '../emprunt/emprunt.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jeux-video',
  templateUrl: './jeux-video.component.html',
  styleUrls: ['./jeux-video.component.css']
})
export class JeuxVideoComponent {
  client = this.authService.getCompte();
  jeuxVideoForm?: JeuVideo = undefined;
  empruntForm: Emprunt = new Emprunt(undefined,undefined, this.client);
  showEmpruntSection: boolean = false;

  constructor(private jeuxVideoService: JeuxVideoService, private authService: AuthService, private router: Router, private jeuxService: JeuxService, private empruntService: EmpruntService) {
  }

  list(): JeuVideo[] {
    return this.jeuxVideoService.findAll();
  }

  add() {
    this.jeuxVideoForm = new JeuVideo();
  }

  edit(id?: number) {
    this.jeuxVideoService.findById(id).subscribe(resp => {
      this.jeuxVideoForm = resp;
    });
  }

  save() {
    if(this.jeuxVideoForm) {
      if(this.jeuxVideoForm.id) {
        this.jeuxVideoService.update(this.jeuxVideoForm);
      } else {
        this.jeuxVideoService.create(this.jeuxVideoForm);
      }
    }

    this.cancel();
  }

  remove(id?: number) {
   this.jeuxVideoService.delete(id);
  }

  cancel() {
    this.jeuxVideoForm = undefined;
  }

  isAdminUser(): boolean {
    return this.authService.isAdmin();
  }

  isClientUser(): boolean {
    return this.authService.isClient();
  }

  Emprunt() {
    this.showEmpruntSection = true;
  }

    listeJeux() {
      return this.jeuxVideoService.findAll()
    }

    saveEmprunt() {
      if (this.empruntForm.jeu) {
        this.empruntForm.client = this.client;
        this.empruntForm.dateEmprunt = new Date();

        this.empruntService.create(this.empruntForm)
      }
    

    this.cancel()

    this.router.navigate(["/emprunt-jeu"]);
    }

    cancelEmprunt() {
      this.empruntForm = new Emprunt(undefined, undefined, this.client);
      this.showEmpruntSection = false;
      this.router.navigate(["/jeux-video"]);
    }
}
