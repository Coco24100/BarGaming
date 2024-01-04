import { Component } from '@angular/core';
import { Emprunt, JeuSociete } from '../model';
import { JeuxSocieteService } from './jeux-societe.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { JeuxService } from '../jeux/jeux.service';
import { EmpruntService } from '../emprunt/emprunt.service';


@Component({
  selector: 'app-jeux-societe',
  templateUrl: './jeux-societe.component.html',
  styleUrls: ['./jeux-societe.component.css']
})
export class JeuxSocieteComponent {
  client = this.authService.getCompte() ;
  jeuxSocieteForm?: JeuSociete = undefined;
  empruntForm: Emprunt = new Emprunt(undefined, undefined, this.client)
  showEmpruntSection: boolean = false;

  constructor(private jeuxSocieteService: JeuxSocieteService, private authService: AuthService, private router: Router, private jeuxService: JeuxService, private empruntService: EmpruntService) {
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
      return this.jeuxSocieteService.findAll()
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
      this.empruntForm = new Emprunt(undefined, undefined, this.client)
      this.router.navigate(["/emprunt-jeu"]);
    }
}
