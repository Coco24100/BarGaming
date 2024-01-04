import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BarGamingFront';

  constructor(private router: Router) {
  }

goQuiSommesNous(){
  this.router.navigate(["/qui-sommes-nous"])
}
goError404() {
  this.router.navigate(["/error404"])
}

}
