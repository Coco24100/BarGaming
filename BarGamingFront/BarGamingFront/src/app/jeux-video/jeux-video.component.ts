import { Component } from '@angular/core';
import { JeuVideo } from '../model';
import { JeuxVideoService } from './jeux-video.service';


@Component({
  selector: 'app-jeux-video',
  templateUrl: './jeux-video.component.html',
  styleUrls: ['./jeux-video.component.css']
})
export class JeuxVideoComponent {

  jeuxVideoForm?: JeuVideo = undefined;

  constructor(private jeuxVideoService: JeuxVideoService) {
  }

  list(): JeuVideo[] {
    return this.jeuxVideoService.findAll();
  }

  add() {
    this.jeuxVideoForm = new JeuVideo();
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
