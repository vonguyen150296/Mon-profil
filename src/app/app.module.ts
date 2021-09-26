import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormationComponent } from './formation/formation.component';
import { ProjetComponent } from './projet/projet.component';
import { ProjetDetailComponent } from './projet-detail/projet-detail.component';
import { CompetenceComponent } from './competence/competence.component';

// material
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';

// font Awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ExperienceComponent,
    FormationComponent,
    ProjetComponent,
    ProjetDetailComponent,
    CompetenceComponent,
    ExperienceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
