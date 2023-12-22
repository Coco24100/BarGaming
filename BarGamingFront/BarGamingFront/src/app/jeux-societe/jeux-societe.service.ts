import { Injectable } from '@angular/core';
import { Jeu } from '../model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JeuxSocieteService {

  jeuxSociete: Array<Jeu> = new Array<Jeu>();

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    let obs: Observable<Jeu[]> = this.http.get<Jeu[]>(environment.apiUrl + "/jeux-societe");

    obs.subscribe(retour => {
      this.jeuxSociete = retour;
    });
  }

  findAll(): Jeu[] {
    return this.jeuxSociete;
  }

  findById(id?: number): Observable<Jeu> {
    return this.http.get<Jeu>(environment.apiUrl + "/jeux-societe/"+id);
  }

  create(jeu: Jeu): void {
    this.http.post<Jeu>(environment.apiUrl + "/jeux-societe", jeu).subscribe(resp => {
      this.load();
    });
  }

  update(jeu: Jeu): void {
    this.http.put<Jeu>(environment.apiUrl + "/jeux-societe/"+jeu.id, jeu).subscribe(resp => {
      this.load();
    });
  }

  delete(id?: number) {
    this.http.delete<void>(environment.apiUrl + "/jeux-societe/"+id).subscribe(resp => {
      this.load();
    });
  }
}