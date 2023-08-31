import { Component } from '@angular/core';
import { tache } from 'src/app/shared/Models/Tache';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.scss']
})
export class DemoDirectiveComponent {
  // je créer plusieurs taches
  tache1 : tache = {
    id : 0,
    nom : 'Tache 1',
    complet : false
  }

  tache2 : tache = {
    id : 1,
    nom : 'Tache 1',
    complet : false
  }

  tache3 : tache = {
    id : 2,
    nom : 'Tache 2',
    complet : false
  }

  tache4 : tache = {
    id : 3,
    nom : 'Tache 3',
    complet : false
  }
  // ajout de toutes les taches au tableaux
  taches : tache[] = [this.tache1,this.tache2,this.tache3,this.tache4]

  changerEtat(id : number) : void {
    // Inversion de l'état booléen de complet
    this.taches[id].complet = !this.taches[id].complet
  }

}

