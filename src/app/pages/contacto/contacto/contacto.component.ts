
import { Component, OnInit } from '@angular/core';

declare var hbspt:any;
declare var $ :any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  spinner = true;

  constructor() { }

  time = 1000;

 ngOnInit() {
      
        
       hbspt.forms.create({
       portalId: "8490019",
        formId: "96e9b86e-4ef9-44e1-958d-7270f28ad9c4",
        target: "#hubspotForm"});

      setInterval(() => {


        const elemento = document.getElementsByTagName('iframe');

        if (elemento) {
          this.spinner = false;
          clearInterval(this.time);
        } 
       
      },this.time);
      
    }

  
  }



