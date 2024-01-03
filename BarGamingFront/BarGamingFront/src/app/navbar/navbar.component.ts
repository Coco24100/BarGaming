import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthService) { }

  isLogged() {
    return this.authService.isLogged()
  }

  logout() {
    this.authService.logout();
  }

  isAdmin() {

    return this.authService.isAdmin()
  }

  isClient() {
    return this.authService.isClient()
  }

  showCompte() {
    const compte = this.authService.getCompte()
    if(compte)
    {
      return compte.username + ": " + compte.type
    }

    return "" ;
  }

}
