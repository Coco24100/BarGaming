import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

 constructor(private router: Router) {
  }

goJeux(){
    this.router.navigate(['/jeux']);}

goJeuxSocietes(){
  this.router.navigate(['/jeuxsociétés']);}

goJeuxVideos(){
    this.router.navigate(['/jeuxsociétés']);}

goEvenements(){
      this.router.navigate(['/event']);}

goEmprunts(){
        this.router.navigate(['/emprunt']);}

goClients(){
          this.router.navigate(['/client']);}




}
