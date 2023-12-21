import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Emprunt } from '../model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {

  emprunts: Array<Emprunt> = new Array<Emprunt>();

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    let obs: Observable<Emprunt[]> = this.http.get<Emprunt[]>(environment.apiUrl + "/emprunt");

    obs.subscribe(retour => {
      this.emprunts = retour;
    });
  }

  findAll(): Emprunt[] {
    return this.emprunts;
  }

  findById(id?: number): Observable<Emprunt> {
    return this.http.get<Emprunt>(environment.apiUrl + "/emprunt/"+id);
  }

  create(emprunt: Emprunt): void {
    this.http.post<Emprunt>(environment.apiUrl + "/emprunt", emprunt).subscribe(resp => {
      this.load();
    });
  }

  update(emprunt: Emprunt): void {
    this.http.put<Emprunt>(environment.apiUrl + "/emprunt/"+emprunt.id, emprunt).subscribe(resp => {
      this.load();
    });
  }

  delete(id?: number) {
    this.http.delete<void>(environment.apiUrl + "/emprunt/"+id).subscribe(resp => {
      this.load();
    });
  }
}

