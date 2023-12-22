import { Injectable } from '@angular/core';
import { JeuSociete } from '../model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JeuxSocieteService {

  jeuxSociete: Array<JeuSociete> = new Array<JeuSociete>();

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    let obs: Observable<JeuSociete[]> = this.http.get<JeuSociete[]>(environment.apiUrl + "/jeux-societe");

    obs.subscribe(retour => {
      this.jeuxSociete = retour;
    });
  }

  findAll(): JeuSociete[] {
    return this.jeuxSociete;
  }

  findById(id?: number): Observable<JeuSociete> {
    return this.http.get<JeuSociete>(environment.apiUrl + "/jeux-societe/"+id);
  }

  create(jeuSociete: JeuSociete): void {
    this.http.post<JeuSociete>(environment.apiUrl + "/jeux-societe", jeuSociete).subscribe(resp => {
      this.load();
    });
  }

  update(jeuSociete: JeuSociete): void {
    this.http.put<JeuSociete>(environment.apiUrl + "/jeux-societe/"+jeuSociete.id, jeuSociete).subscribe(resp => {
      this.load();
    });
  }

  delete(id?: number) {
    this.http.delete<void>(environment.apiUrl + "/jeux-societe/"+id).subscribe(resp => {
      this.load();
    });
  }
}