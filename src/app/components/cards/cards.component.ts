import { Component, OnInit } from '@angular/core';
import {Skill, SkillsService} from '../../services/skills.service'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  skills:Skill[] = [];

  constructor(private skillsService:SkillsService) { }

  ngOnInit(){

    this.skills = this.skillsService.getSkills();
    
  }



}
