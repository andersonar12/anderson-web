import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto/contacto.component';
import { HomeComponent } from './pages/home/home/home.component';
import { PortafolioComponent } from './pages/portafolio/portafolio/portafolio.component';
import { SkillsComponent } from './pages/skills/skills/skills.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'skills', component: SkillsComponent },
  {path:'portafolio', component: PortafolioComponent },
  {path:'contacto', component: ContactoComponent},
  {path:'**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
