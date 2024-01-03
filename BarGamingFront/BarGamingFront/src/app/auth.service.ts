import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Compte } from './model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private compte?: Compte = undefined;

  constructor(private http: HttpClient, private router: Router) { }

  

  login(username: string, password: string) {
    return this.http.post<Compte>(environment.apiUrl + `/connexion`, { "login": username, "password": password }).subscribe(resp => {
      this.compte = resp;
      localStorage.setItem("user", JSON.stringify(this.compte));

      this.router.navigate(["/accueil"]);
    });
  }

  logout() {
    this.compte = undefined;
    localStorage.removeItem("user");
  }

  isLogged(): boolean {
    return this.getClient() != undefined;
  }

  getClient(): Compte | undefined{
    if(this.compte) {
      return this.compte;
    } else {
      const user = localStorage.getItem("user")
      if(user) {
        this.compte = JSON.parse(user);
        return this.compte;
      }
    }

    return undefined;
  }
  
}