import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../services/projects.service'

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css'],
})
export class PortafolioComponent implements OnInit {

  projects = []

  constructor(private projectServices: ProjectsService) {
    this.projects = this.projectServices.projects
  }

  ngOnInit() {
  }

  processImages(images: []) {
    /* return images.map(item => new ImageItem({ src: item, thumb: item })); */
    return images.map(item => {
      return { small: item, medium: item, big: item }
    });
  }




}
