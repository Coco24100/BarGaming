import { Component } from '@angular/core';
import { Client, Evenement } from '../model';
import { ClientService } from '../client/client.service';
import { Router } from '@angular/router';
import { EvenementService } from '../evenement/evenement.service';

@Component({
  selector: 'app-tab-client',
  templateUrl: './tab-client.component.html',
  styleUrls: ['./tab-client.component.css']
})
export class TabClientComponent {

constructor(private clientService:ClientService, private router:Router, private eventService:EvenementService) {
 

}

tabInfos?:Client = undefined;
tabLocation: boolean = false;
tabInscription: boolean = false;
tablHistorique: boolean=false;


showInfos(){
  this.tabInfos = new Client();
//requete pour récuperere id client

// this.clientService.findById(id).subscribe(resp => {
//   this.tabInfos = resp;
// });
}

showInscription(){
  this.tabInscription = true;
}

showLocation(){
  this.tabLocation = true;
}

showHistorique(){
  this.tablHistorique = true;
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
this.router.navigate(["/"]);
}

voirTabJeuVideo(){
this.router.navigate(["/"]);

}

listEvents(): Evenement[]{
return this.eventService.findAll();
}

inscription(){
  this.router.navigate(["/"]);
}












}
