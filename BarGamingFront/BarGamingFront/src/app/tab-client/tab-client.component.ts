import { Component } from '@angular/core';
import { Client, Evenement, Utilisateur } from '../model';
import { ClientService } from '../client/client.service';
import { Router } from '@angular/router';
import { EvenementService } from '../evenement/evenement.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab-client',
  templateUrl: './tab-client.component.html',
  styleUrls: ['./tab-client.component.css']
})
export class TabClientComponent {

constructor(private clientService:ClientService, private router:Router, private eventService:EvenementService, private authService:AuthService) {
 

}

tabInfos?:Client = undefined;
tabLocation: boolean = false;
tabInscription: boolean = false;
tablHistorique: boolean=false;
utilisateur? : Utilisateur = new Utilisateur();

showInfos(){
 this.tabInfos = new Client(); 
 this.tabLocation = false;
  this.tablHistorique = false;
  this.tabInscription = false;

  this.utilisateur = this.authService.getClient();
// this.clientService.findByNomPrenom(utilisateur.nom,utilisateur.prenom ).subscribe(resp => {
//   this.tabInfos = resp;
// });

}

showInscription(){
  this.tabInscription = true;
  this.tabLocation = false;
  this.tablHistorique = false;
  this.tabInfos = undefined;
}

showLocation(){
  this.tabLocation = true;
  this.tabInscription = false;
  this.tablHistorique = false;
  this.tabInfos = undefined;
}

showHistorique(){
  this.tablHistorique = true;
  this.tabLocation = false;
  this.tabInscription = false;
  this.tabInfos = undefined;
}

save() {
    if(this.tabInfos) {
  this.clientService.update(this.tabInfos); 
    }
    this.cancel();
  }

  cancel() {
    this.tabInfos = undefined;
  }

cloturer(){

}

voirTabJeuSociete(){
this.router.navigate(["/emprunt-jeu"]);
}

voirTabJeuVideo(){
this.router.navigate(["/emprunt-jeu"]);

}

listEvents(): Evenement[]{
return this.eventService.findAll();
}

inscription(){
  this.router.navigate(["/inscription-evenement"]);
}












}
