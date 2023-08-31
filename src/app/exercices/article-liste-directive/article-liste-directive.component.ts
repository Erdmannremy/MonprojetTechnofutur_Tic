import { Component } from '@angular/core';
import { article } from 'src/app/shared/Models/article';

@Component({
  selector: 'app-article-liste-directive',
  templateUrl: './article-liste-directive.component.html',
  styleUrls: ['./article-liste-directive.component.scss']
})
export class ArticleListeDirectiveComponent {

  article : article = {
    titre :'Article 1',
    description :'Description de l\'article 1',
    estPublie : true
  }
  article2 : article = {
    titre :'Article 2',
    description :'Description de l\'article 2',
    estPublie : false
  }

  articles : article[] = [this.article, this.article2];

  afficherTous = true;

  basculerAffichage() : void {
    this.afficherTous = !this.afficherTous;
  }
}
