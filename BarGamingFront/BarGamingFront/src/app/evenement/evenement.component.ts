import { Component } from '@angular/core';
import { EvenementService } from './evenement.service';
import { Evenement } from '../model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent {

  evenementForm?: Evenement = undefined;

  constructor(private evenementService: EvenementService, private authService: AuthService) {
  }

  list(): Evenement[] {
    return this.evenementService.findAll();
  }

  add() {
    this.evenementForm = new Evenement();
  }

  edit(id?: number) {
    this.evenementService.findById(id).subscribe(resp => {
      this.evenementForm = resp;
    });
  }

  save() {
    if(this.evenementForm) {
      if(this.evenementForm.id) {
        this.evenementService.update(this.evenementForm);
      } else {
        this.evenementService.create(this.evenementForm);
      }
    }

    this.cancel();
  }

  remove(id?: number) {
   this.evenementService.delete(id);
  }

  cancel() {
    this.evenementForm = undefined;
  }

  isAdminUser(): boolean {
    return this.authService.isAdmin();
  }

  isClientUser(): boolean {
    return this.authService.isClient();
  }
}
