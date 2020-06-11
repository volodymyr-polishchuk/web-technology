import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalQualitiesComponent} from './pages/personal-qualities/personal-qualities.component';
import {PlansForTheFutureComponent} from './pages/plans-for-the-future/plans-for-the-future.component';
import {
  ProfessionalSkillsAndAbilitiesComponent
} from './pages/professional-skills-and-abilities/professional-skills-and-abilities.component';


const routes: Routes = [
  {
    component: PersonalQualitiesComponent,
    path: 'personal-qualities',
  },
  {
    component: ProfessionalSkillsAndAbilitiesComponent,
    path: 'professional-skills-and-abilities',
  },
  {
    component: PlansForTheFutureComponent,
    path: 'plans-for-the-future',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'personal-qualities'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
