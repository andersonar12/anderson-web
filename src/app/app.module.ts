import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { HomeComponent } from './pages/home/home/home.component';
import { SkillsComponent } from './pages/skills/skills/skills.component';
import { PortafolioComponent } from './pages/portafolio/portafolio/portafolio.component';
import { ContactoComponent } from './pages/contacto/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
/* import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox'; */
import { ProjectsComponent } from './components/projects/projects.component';

import {MatTabsModule} from '@angular/material/tabs'
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SkillsComponent,
    PortafolioComponent,
    ContactoComponent,
    FooterComponent,
    CardsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
