import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExperienceDetailComponent } from './experience-detail/experience-detail.component';
import { ProjetComponent } from './projet/projet.component';
import { CompetenceComponent } from './competence/competence.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "experience/:name", component: ExperienceDetailComponent },
  { path: "projets", component: ProjetComponent },
  { path: "competences", component: CompetenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
