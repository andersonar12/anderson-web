import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  public skills: Skill[] = [
    {
      title: 'Angular',
      img: 'assets/img/skills/angular-new-logo.gif',
      porc: 90
    },
    {
      title: 'Vue.js',
      img: 'assets/img/skills/vue.png',
      porc: 75
    },
    {
      title: 'React',
      img: 'assets/img/skills/react-logo.png',
      porc: 60
    },
    {
      title: 'Next.js',
      img: 'assets/img/skills/next-js-logo.png',
      porc: 80
    },
    {
      title: 'Ionic',
      img: 'assets/img/skills/ionic.png',
      porc: 80
    },
    {
      title: 'Typescript',
      img: 'assets/img/skills/typescript.png',
      porc: 80,
    },
    {
      title: 'Javascript',
      img: 'assets/img/skills/javascript.png',
      porc: 85,
    },
    {
      title: 'Node.js',
      img: 'assets/img/skills/node.png',
      porc: 50,
    },
    {
      title: 'Bootstrap',
      img: 'assets/img/skills/bootstrap.png',
      porc: 95,
    },
    {
      title: 'PHP',
      img: 'assets/img/skills/php.png',
      porc: 65,
    },
    {
      title: 'HTML',
      img: 'assets/img/skills/html.png',
      porc: 100,
    },
    {
      title: 'CSS',
      img: 'assets/img/skills/css.png',
      porc: 75,
    },
    {
      title: 'Jquery',
      img: 'assets/img/skills/jquery.png',
      porc: 90,
    },
    {
      title: 'Firebase',
      img: 'assets/img/skills/firebase.png',
      porc: 40,
    },
    {
      title: 'GIT',
      img: 'assets/img/skills/github.png',
      porc: 75,
    }
  ];

  constructor() { }

  getSkills = () => this.skills;

}

export interface Skill {

  title: string,
  img: string,
  porc: number

}
