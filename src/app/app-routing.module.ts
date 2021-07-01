import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto/contacto.component';
import { HomeComponent } from './pages/home/home/home.component';
import { PortafolioComponent } from './pages/portafolio/portafolio/portafolio.component';
import { SkillsComponent } from './pages/skills/skills/skills.component';

const routes: Routes = [
  {path:'home', component: HomeComponent,data:{animation : 'isLeft'}},
  {path:'skills', component: SkillsComponent,data:{animation : 'enter'} },
  {path:'portafolio', component: PortafolioComponent,data:{animation : 'trigger'} },
  {path:'contacto', component: ContactoComponent,data:{animation : 'isRight'}},
  {path:'**', pathMatch: 'full', redirectTo:'home', data:{animation : 'enter'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
