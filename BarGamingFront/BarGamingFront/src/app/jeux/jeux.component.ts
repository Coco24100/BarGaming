import { Component } from '@angular/core';
import { Jeux } from '../model';
import { JeuxService } from './jeux.service';


@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent {

  jeuxForm?: Jeux = undefined;

  constructor(private jeuxService: JeuxService) {
  }

  list(): Jeux[] {
    return this.jeuxService.findAll();
  }

  add() {
    this.jeuxForm = new Jeux();
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
        this.jeuxService.create(this.jeuxForm);
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
