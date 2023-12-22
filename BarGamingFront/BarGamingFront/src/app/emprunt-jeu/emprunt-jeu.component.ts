import { Component } from '@angular/core';
import { EmpruntService } from '../emprunt/emprunt.service';
import { JeuxService } from '../jeux/jeux.service';
import { Client, Emprunt } from '../model';
import { JeuxSocieteService } from '../jeux-societe/jeux-societe.service';

@Component({
  selector: 'app-emprunt-jeu',
  templateUrl: './emprunt-jeu.component.html',
  styleUrls: ['./emprunt-jeu.component.css']
})
export class EmpruntJeuComponent {


  
  constructor(private empruntService: EmpruntService , private jeuxSocieteService : JeuxSocieteService){}
 
  client = new Client(2,"Johnny","Dodo")
  empruntForm: Emprunt = new Emprunt(undefined,undefined,this.client)

  listeJeux()
  {
    return this.jeuxSocieteService.findAll()
  }

  save() {
    
    this.empruntForm.dateEmprunt = new Date();

    this.empruntService.create(this.empruntForm)

    
  }

  cancel() { }



}
