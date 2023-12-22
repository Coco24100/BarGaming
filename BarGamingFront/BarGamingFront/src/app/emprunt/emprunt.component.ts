import { Component } from '@angular/core';
import { Emprunt } from '../model';
import { EmpruntService } from './emprunt.service';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent {

  empruntForm?: Emprunt = undefined;
  jeuxDisponibles: string[] = [];
  
  constructor(private empruntService: EmpruntService) {
  }

  list(): Emprunt[] {
    return this.empruntService.findAll();
  }

  add() {
    this.empruntForm = new Emprunt();
  }

  edit(id?: number) {
    this.empruntService.findById(id).subscribe(resp => {
      this.empruntForm = resp;
    });
  }

  save() {
    if(this.empruntForm) {
      if(this.empruntForm.id) {
        this.empruntService.update(this.empruntForm);
      } else {
        this.empruntService.create(this.empruntForm);
      }
    }

    this.cancel();
  }

  remove(id?: number) {
   this.empruntService.delete(id);
  }

  cancel() {
    this.empruntForm = undefined;
  }
}
