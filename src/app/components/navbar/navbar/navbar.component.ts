import { Component, OnInit } from '@angular/core';
// declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  hideNavbar() {
    // $('.navbar-collapse').collapse('hide');

    let button = document.querySelector(
      'body > app-root > app-navbar > header > div > nav > button'
    );

    if (button.getAttribute('aria-expanded') === 'true')
      (<HTMLElement>button).click();
  }
}
