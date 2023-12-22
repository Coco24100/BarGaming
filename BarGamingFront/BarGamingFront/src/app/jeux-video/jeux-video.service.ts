import { Injectable } from '@angular/core';
import { JeuVideo } from '../model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JeuxVideoService {

  jeuxVideo: Array<JeuVideo> = new Array<JeuVideo>();

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    let obs: Observable<JeuVideo[]> = this.http.get<JeuVideo[]>(environment.apiUrl + "/jeux-video");

    obs.subscribe(retour => {
      this.jeuxVideo = retour;
    });
  }

  findAll(): JeuVideo[] {
    return this.jeuxVideo;
  }

  findById(id?: number): Observable<JeuVideo> {
    return this.http.get<JeuVideo>(environment.apiUrl + "/jeux-video/"+id);
  }

  create(jeuVideo: JeuVideo): void {
    this.http.post<JeuVideo>(environment.apiUrl + "/jeux-video", jeuVideo).subscribe(resp => {
      this.load();
    });
  }

  update(jeuVideo: JeuVideo): void {
    this.http.put<JeuVideo>(environment.apiUrl + "/jeux-video/"+jeuVideo.id, jeuVideo).subscribe(resp => {
      this.load();
    });
  }

  delete(id?: number) {
    this.http.delete<void>(environment.apiUrl + "/jeux-video/"+id).subscribe(resp => {
      this.load();
    });
  }
}