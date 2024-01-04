import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buttonInscription'
})
export class ButtonInscriptionPipe implements PipeTransform {

  transform(IsIncrite?: boolean): string {
    if (IsIncrite == false) {
      return " Je veux m'inscrire";
    } 
    else {
          return " Vous êtes inscrit(e)";
    }
  }

}
