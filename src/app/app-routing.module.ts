import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Exercice1Component } from './exercices/exercice1/exercice1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { Exercice2Component } from './exercices/exercice2/exercice2.component';
import { DemoDirectiveComponent } from './demo/demo-directive/demo-directive.component';
import { ArticleListeDirectiveComponent } from './exercices/article-liste-directive/article-liste-directive.component';
import { ParentComponentComponent } from './demo/demoInputOutput/parent-component/parent-component.component';
import { ParentComponent } from './demo/demoInputOutput/v-2/parent/parent.component';
import { ExoBouttonClickComponent } from './exercices/exo-boutton-click/exo-boutton-click.component';
import { ExoBouttonClickParentComponent } from './exercices/exo-boutton-click-parent/exo-boutton-click-parent.component';
import { DemoServiceComponent } from './demo/demo-service/demo-service.component';
import { ProductListComponent } from './exercices/product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'demo1', component: Demo1Component },
  { path: 'demo2', component: Demo2Component },
  { path: 'demo-directive', component: DemoDirectiveComponent },
  { path: 'demo-input-output', component: ParentComponentComponent },
  { path: 'demo-input-output-V-2', component: ParentComponent },
  { path : 'demo-service', component : DemoServiceComponent},
  { path: 'exercice1', component: Exercice1Component },
  { path: 'exercice2', component: Exercice2Component },
  { path: 'article-liste-directive', component: ArticleListeDirectiveComponent },
  { path: 'exo-boutton-click', component: ExoBouttonClickParentComponent },
  { path: 'product-list', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
