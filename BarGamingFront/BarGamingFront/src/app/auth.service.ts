import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Client } from './model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(username: string, password: string){}

  private client?: Client = undefined;

  constructor(private http: HttpClient, private router: Router) { }

  

  login(username: string, password: string) {
    return this.http.post<Client>(environment.apiUrl + `/connexion`, { "login": username, "password": password }).subscribe(resp => {
      this.client = resp;
      localStorage.setItem("user", JSON.stringify(this.client));

      this.router.navigate(["/accueil"]);
    });
  }

  logout() {
    this.client = undefined;
    localStorage.removeItem("user");
  }

  isLogged(): boolean {
    return this.getClient() != undefined;
  }

  getClient(): Client | undefined{
    if(this.client) {
      return this.client;
    } else {
      const user = localStorage.getItem("user")
      if(user) {
        this.client = JSON.parse(user);
        return this.client;
      }
    }

    return undefined;
  }
  */
}