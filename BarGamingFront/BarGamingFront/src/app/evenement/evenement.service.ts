import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evenement } from '../model';
@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  evenements: Array<Evenement> = new Array<Evenement>();

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    let obs: Observable<Evenement[]> = this.http.get<Evenement[]>(environment.apiUrl + "/evenement");

    obs.subscribe(retour => {
      this.evenements = retour;
    });
  }

  findAll(): Evenement[] {
    return this.evenements;
  }

  findById(id?: number): Observable<Evenement> {
    return this.http.get<Evenement>(environment.apiUrl + "/evenement/"+id);
  }

  create(evenement: Evenement): void {
    this.http.post<Evenement>(environment.apiUrl + "/evenement", evenement).subscribe(resp => {
      this.load();
    });
  }

  update(evenement: Evenement): void {
    this.http.put<Evenement>(environment.apiUrl + "/evenement/"+evenement.id, evenement).subscribe(resp => {
      this.load();
    });
  }

  delete(id?: number) {
    this.http.delete<void>(environment.apiUrl + "/evenement/"+id).subscribe(resp => {
      this.load();
    });
  }
}
