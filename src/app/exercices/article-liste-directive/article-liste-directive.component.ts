import { Component } from '@angular/core';
import { article } from 'src/app/shared/Models/article';

@Component({
  selector: 'app-article-liste-directive',
  templateUrl: './article-liste-directive.component.html',
  styleUrls: ['./article-liste-directive.component.scss']
})
export class ArticleListeDirectiveComponent {

  articles : article[] = [
    {
      titre : 'Article',
      description : 'Article',
      estPublie : true
    },
    {
      titre : 'Article2',
      description : 'Article2',
      estPublie : false
    }
  ]

  afficherTous = true;

  basculerAffichage() : void {
    this.afficherTous = !this.afficherTous;
  }
}
