import { Component } from '@angular/core';
import { EmpruntService } from '../emprunt/emprunt.service';
import { JeuxService } from '../jeux/jeux.service';
import { Client, Emprunt, Jeu } from '../model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-emprunt-jeu',
  templateUrl: './emprunt-jeu.component.html',
  styleUrls: ['./emprunt-jeu.component.css']
})
export class EmpruntJeuComponent {



  constructor(private empruntService: EmpruntService, private jeuxService: JeuxService ,private router:Router , private authService : AuthService) { }

  client = this.authService.getCompte() ;

  empruntForm: Emprunt = new Emprunt(undefined, undefined, this.client)

  listeJeux() {
    return this.jeuxService.findAll()
  }

  save() {

      if (this.empruntForm.jeu) {
        this.empruntForm.client = this.client;
        this.empruntForm.dateEmprunt = new Date();

        this.empruntService.create(this.empruntForm)
      }
    

    this.cancel()

    this.router.navigate(["/tabclient"]);

  }

  cancel() {
     this.empruntForm = new Emprunt(undefined, undefined, this.client)
     this.router.navigate(["/tabclient"]);

  }



}
