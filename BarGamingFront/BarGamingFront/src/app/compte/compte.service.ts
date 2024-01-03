import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compte } from '../model';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private compteAddedSubject = new Subject<Compte>();
  constructor(private http: HttpClient) { }

  findAll(): Observable<Compte[]> {
    return this.http.get<Compte[]>(environment.apiUrl + "/compte");
  }

  findClient(): Observable<Compte> {
    return this.http.get<Compte>(environment.apiUrl + "/compte/client");
  }

  findById(id?: number): Observable<Compte> {
    return this.http.get<Compte>(environment.apiUrl + "/compte/"+id);
  }

  save(compte: Compte): Observable<Compte>{
    if(compte.type == "admin")
    {
      if(compte.id) {
        return this.http.put<Compte>(environment.apiUrl + "/compte/admin/"+compte.id, compte);

      }

      return this.http.post<Compte>(environment.apiUrl + "/compte/admin", compte);
    }

    else {

      if(compte.id) {
        return this.http.put<Compte>(environment.apiUrl + "/compte/client/"+compte.id, compte);
      }

      return this.http.post<Compte>(environment.apiUrl + "/compte/client", compte);
    }


    }

  delete(id?: number): Observable<void> {
    return this.http.delete<void>(environment.apiUrl + "/compte/"+id);
  }

  emitCompteAdded(compte: Compte) {
    if (compte.type === 'client') {
      this.compteAddedSubject.next(compte);
    }
  }

  // Observable pour écouter les événements d'ajout de compte
  onCompteAdded(): Observable<Compte> {
    return this.compteAddedSubject.asObservable();
  }
}
