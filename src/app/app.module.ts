import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Exercice1Component } from './exercices/exercice1/exercice1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { SharedModule } from './shared/shared.module';
import { Exercice2Component } from './exercices/exercice2/exercice2.component';
import { DemoDirectiveComponent } from './demo/demo-directive/demo-directive.component';
import { ArticleListeDirectiveComponent } from './exercices/article-liste-directive/article-liste-directive.component';
import { ChildComponentComponent } from './demo/demoInputOutput/child-component/child-component.component';
import { ParentComponentComponent } from './demo/demoInputOutput/parent-component/parent-component.component';
import { ChildComponent } from './demo/demoInputOutput/v-2/child/child.component';
import { ParentComponent } from './demo/demoInputOutput/v-2/parent/parent.component';
import { ExoBouttonClickComponent } from './exercices/exo-boutton-click/exo-boutton-click.component';
import { ExoBouttonClickParentComponent } from './exercices/exo-boutton-click-parent/exo-boutton-click-parent.component';
import { DemoServiceComponent } from './demo/demo-service/demo-service.component';
import { ProductListComponent } from './exercices/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo1Component,
    Exercice1Component,
    NavbarComponent,
    Demo2Component,
    Exercice2Component,
    DemoDirectiveComponent,
    ArticleListeDirectiveComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    ChildComponent,
    ParentComponent,
    ExoBouttonClickComponent,
    ExoBouttonClickParentComponent,
    DemoServiceComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
