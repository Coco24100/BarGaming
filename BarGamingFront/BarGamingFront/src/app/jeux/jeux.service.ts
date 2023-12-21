import { Injectable } from '@angular/core';
import { Jeux } from '../model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  Jeux: Array<Jeux> = new Array<Jeux>();

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    let obs: Observable<Jeux[]> = this.http.get<Jeux[]>(environment.apiUrl + "/Jeux");

    obs.subscribe(retour => {
      this.Jeux = retour;
    });
  }

  findAll(): Jeux[] {
    return this.Jeux;
  }

  findById(id?: number): Observable<Jeux> {
    return this.http.get<Jeux>(environment.apiUrl + "/Jeux/"+id);
  }

  create(Jeux: Jeux): void {
    this.http.post<Jeux>(environment.apiUrl + "/Jeux", Jeux).subscribe(resp => {
      this.load();
    });
  }

  update(Jeux: Jeux): void {
    this.http.put<Jeux>(environment.apiUrl + "/Jeux/"+Jeux.id, Jeux).subscribe(resp => {
      this.load();
    });
  }

  delete(id?: number) {
    this.http.delete<void>(environment.apiUrl + "/Jeux/"+id).subscribe(resp => {
      this.load();
    });
  }
}
