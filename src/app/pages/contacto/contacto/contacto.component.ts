
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../../../services/utils.service';
import { SendMailService } from '../../../services/send-mail.service';
import { FormsModule } from '@angular/forms';
// declare var hbspt: any;
// declare var $: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  // spinner = true;
  formGroup: FormGroup;

  constructor(public utils: UtilsService, public mailer: SendMailService) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    });
  }

  sendMail() {

    this.utils.presentLoader()

    this.mailer.sendMail(this.formGroup.value).toPromise().then((resp) => {

      console.log(resp);
      this.utils.successAlert('Success', 'Thanks for the message in the next few minutes I will contact you.')
    })
  }

}

// hbspt.forms.create({
//   portalId: "8490019",
//   formId: "96e9b86e-4ef9-44e1-958d-7270f28ad9c4",
//   target: "#hubspotForm"
// });

// setInterval(() => {

//   const elemento = document.getElementsByTagName('iframe');
//   if (elemento) {
//     this.spinner = false;
//     clearInterval(this.time);
//   }

// }, this.time);


