import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Admin, Client, Compte } from './model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  private compte? : Compte

  constructor(private http: HttpClient, private router: Router) { }

  

  login(username: string, password: string) {
    return this.http.post<Compte>(environment.apiUrl + `/connexion`, { "login": username, "password": password }).subscribe(resp => {
      //this.compte = resp;

      if(resp.type === "client")
        {this.compte =  resp as Client;}
      if(resp.type === "admin")
        {this.compte =  resp as Admin;}

      localStorage.setItem("user", JSON.stringify(this.compte));

      this.router.navigate(["/accueil"]);
    });
  }

  logout() {
    this.compte = undefined;
    localStorage.removeItem("user");
    this.router.navigate(['accueil'])
  }

  isLogged(): boolean {
    return this.getCompte() != undefined;
    console.log(this.getCompte())
  }

  isAdmin() : boolean{

    if(this.isLogged())
    {
      return ( this.getCompte()?.type === "admin"  )
    }
    return false
  }

  isClient() : boolean{

    if(this.isLogged())
    {
      return ( this.getCompte()?.type === "client"  )
    }
    return false
  }

  getCompte(): Compte | undefined{
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