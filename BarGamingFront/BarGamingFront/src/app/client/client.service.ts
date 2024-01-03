import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client, Compte } from '../model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientsUpdatedSubject = new Subject<void>();

  clients: Array<Client> = new Array<Client>();

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    let obs: Observable<Client[]> = this.http.get<Client[]>(environment.apiUrl + "/compte/client");

    obs.subscribe(retour => {
      this.clients = retour;
      this.clientsUpdatedSubject.next(); // Émettre un événement après la mise à jour
    });
  }

  findAll(): Client[] {
    return this.clients;
  }

  findById(id?: number): Observable<Client> {
    return this.http.get<Client>(environment.apiUrl + "/compte/client/"+id);
  }

  create(client: Client): void {
    this.http.post<Client>(environment.apiUrl + "/compte/client", client).subscribe(resp => {
      this.load();
      this.clientsUpdatedSubject.next();  // Émettre l'événement après la création d'un client
    });
  }

  update(client: Client): void {
    this.http.put<Client>(environment.apiUrl + "/compte/client/"+client.id, client).subscribe(resp => {
      this.load();
      this.clientsUpdatedSubject.next();
    });
  }

  delete(id?: number) {
    this.http.delete<void>(environment.apiUrl + "/compte/"+id).subscribe(resp => {
      this.load();
      this.clientsUpdatedSubject.next();
    });
  }
  onClientsUpdated(): Observable<void> {
    return this.clientsUpdatedSubject.asObservable();
  }
}

