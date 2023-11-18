import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements AfterViewInit {

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData;
  // }


  constructor(private router: Router) { }

  ngAfterViewInit() {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.scrollToTop();
      });
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      // behavior: 'smooth'
    });
  }

}
