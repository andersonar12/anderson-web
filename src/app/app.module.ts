import { BrowserModule } from '@angular/platform-browser';
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
import { ProjectsComponent } from './components/projects/projects.component';
import { MatTabsModule } from '@angular/material/tabs'
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
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
    MatCardModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
