import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: Array<Client> = new Array<Client>();

  constructor(private http: HttpClient) {
    this.load();
  }

  load() {
    let obs: Observable<Client[]> = this.http.get<Client[]>(environment.apiUrl + "/client");

    obs.subscribe(retour => {
      this.clients = retour;
    });
  }

  findAll(): Client[] {
    return this.clients;
  }

  findById(id?: number): Observable<Client> {
    return this.http.get<Client>(environment.apiUrl + "/client/"+id);
  }

  create(client: Client): void {
    this.http.post<Client>(environment.apiUrl + "/client", client).subscribe(resp => {
      this.load();
    });
  }

  update(client: Client): void {
    this.http.put<Client>(environment.apiUrl + "/client/"+client.id, client).subscribe(resp => {
      this.load();
    });
  }

  delete(id?: number) {
    this.http.delete<void>(environment.apiUrl + "/client/"+id).subscribe(resp => {
      this.load();
    });
  }
}

