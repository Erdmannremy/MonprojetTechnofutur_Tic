import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  /*
    dans une class : je peux avoir exclusivement des déclarations (de variable ou de méthode)
    mais pas de code fonctionnel

    le code fonctionnel devra se trouver dans des méthodes
  */
  monNom : string = "steve";
  monAge : number = 40;
  maDateNaissance : Date = new Date(2000,1,2)
  marier : boolean = false

  monTableau : any[] = ["toto", 18, "tutu"]

  changerNom(nom : string) {
    this.monNom = nom
  }

}
