import { Component } from '@angular/core';
import { Jeu } from '../model';
import { JeuxVideoService } from './jeux-video.service';


@Component({
  selector: 'app-jeux-video',
  templateUrl: './jeux-video.component.html',
  styleUrls: ['./jeux-video.component.css']
})
export class JeuxVideoComponent {

  jeuxVideoForm?: Jeu = undefined;

  constructor(private jeuxVideoService: JeuxVideoService) {
  }

  list(): Jeu[] {
    return this.jeuxVideoService.findAll();
  }

  add() {
    this.jeuxVideoForm = new Jeu();
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
}
